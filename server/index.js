const express = require("express");
const path = require("path");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const pino = require("express-pino-logger")();
const bodyParser = require("body-parser");
require("dotenv").config();

const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = express();

  var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
  var authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

  const client = require("twilio")(accountSid, authToken);
  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(pino);

  app.post("/api/message", (req, res) => {
    const { message, sender_name, sender_tel, location } = req.query;
    const messageBody = `${sender_name || "A stranger"} spotted Mango! \"${
      message || "No message added."
    }\" Give them a call at ${sender_tel || "No number provided."}. ${
      location &&
      `Find them at https://www.google.com/maps/dir/?api=1&destination=${location}.`
    }`;
    const numbers = [process.env.WILL_PHONE, process.env.LAURA_PHONE];

    Promise.all(
      numbers.map((number) => {
        return client.messages.create({
          to: number,
          from: process.env.TWILIO_PHONE,
          body: messageBody,
        });
      })
    )
      .then(() => console.log("Messages sent!"))
      .then(() => res.send(JSON.stringify({ message: "messages sent" })))
      .catch((err) => console.log(err))
  });

  // Answer API requests.
  app.get("/api", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send('{"message":"Hello from the custom server!"}');
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get("*", function (request, response) {
    response.sendFile(
      path.resolve(__dirname, "../react-ui/build", "index.html")
    );
  });

  app.listen(PORT, function () {
    console.error(
      `Node ${
        isDev ? "dev server" : "cluster worker " + process.pid
      }: listening on port ${PORT}`
    );
  });
}
