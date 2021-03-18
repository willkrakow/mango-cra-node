import React from "react";
import { Image } from "cloudinary-react";
import {
  FlexChild,
  FlexWrapper,
  BigHeader,
  IconLink,
} from "./components";
import PhoneSharp from "@material-ui/icons/PhoneSharp";
import MapSharp from "@material-ui/icons/Map";

const Description = () => (
  <>
    <BigHeader>Mango</BigHeader>
    <Image
      cloudName="djmk8xgrk"
      publicId="mango_fz0jtf.jpg"
      width="400"
      crop="scale"
      style={{ maxWidth: "100%" }}
    />
    <div
      style={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconLink
        href="https://www.google.com/maps/dir/?api=1&destination=231+W+Margaret+Ln%2C+Hillsborough%2C+NC+27278"
        alt="Get directions to Mango's house"
        icon={
          <MapSharp htmlColor="inherit" fontSize="inherit" />
        }
        text="Take me home"
      />
      <IconLink
        href="tel:+1-919-923-9882"
        alt="Call my parents"
        icon={
          <PhoneSharp htmlColor="inherit" fontSize="inherit" />
        }
        text="Call my parents"
      />
    </div>
    <FlexWrapper>
      <FlexChild>
        <h3 style={{ textAlign: "left" }}>Hi hooman.</h3>
        <p style={{ textAlign: "left" }}>Hope you're doing alright today.</p>
        <p style={{ textAlign: "left" }}>
          My name's Mango, and I like in Hillsborough, NC on Margaret Lane. I
          live to hunt bugs and bully my brother (he's a doggo) and play frogger
          in the street.
        </p>
        <p style={{ textAlign: "left" }}>
          If you're reading this, you probably found me being a bully or a good hunter or a bad froggerer. Oops.
        </p>
        <h3 style={{ textAlign: "left" }}>What to do with me</h3>
        <ul style={{ textAlign: "left" }}>
          <li>
            Give me snoogles. (Don't worry, I got shot with rabbies. No...
            wait.. okay it was something like that.
          </li>
          <li>
            Let my parents know where I am. Their names are Will and Laura and
            they are LAME but nice enough.
          </li>
          <li>More snoogles pls.</li>
          <li>Don't feed me. I don't know when to stop. Gosh darn I love food.</li>
        </ul>
        <h3 style={{ textAlign: "left" }}>Why the frick am I out here</h3>
        <p style={{ textAlign: "left" }}>
          Because I like being outside, duh. Sunshine is good for doggos and
          ferocious Mangos and hoomans alike.
        </p>
      </FlexChild>
    </FlexWrapper>
  </>
);

export default Description;
