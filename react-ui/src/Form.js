import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { PlainText, FormWrapper, TextArea, TextInput, Button, LocationIcon, SmallText, Loader } from './components'


export default function Form() {

  const [location, setLocation] = useState([]);
  const [sent, setSent] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const { register, watch, errors, handleSubmit, getValues } = useForm();
  const handleClick = () => {
      setLoading(true)
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
      }

      function success(position) {
          console.log(position)
        setLocation([position.coords.latitude, position.coords.longitude]);
        setLoading(false)
      }
  }

  async function onSubmit() {
    const data = getValues();
    const res = await fetch(
      `/api/message/?location=${location.toLocaleString()}&message=${
        data.message
      }&sender_name=${data.name}&sender_tel=${data.phone_number}`,
      {
        method: "POST",
      }
    );
    res.ok ? setSent(true) : console.log("nope form");
  }

  watch();
  return (
    <>
      <h3>Contact my parents</h3>
      {location.length > 0 ? null : (
        <Button onClick={handleClick}>Include your location</Button>
      )}
      <Loader loading={loading} />
      {location.length > 0 && (
        <>
          <SmallText>Your location</SmallText>
          <p>
            <LocationIcon />
            {location.toLocaleString()}
          </p>
        </>
      )}
      {!sent && (
        <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <FormWrapper>
            <TextInput
              type="text"
              style={{ display: "block", width: "100%" }}
              ref={register({ required: true })}
              name="name"
              placeholder="Your name"
            />
            {errors.name && <span>Please enter your name</span>}
            <TextInput
              style={{ display: "block", width: "100%" }}
              type="tel"
              placeholder="Phone number"
              name="phone_number"
              ref={register({ required: true, minLength: 6, maxLength: 15 })}
            />
            {errors.phone_number && (
              <span>Let us know where we can reach you</span>
            )}
            <TextArea
              type="textarea"
              name="message"
              placeholder="How's the Mango?"
              ref={register({ required: true })}
            />
          </FormWrapper>
          <input type="hidden" name="location" value={location} />
          {errors.message && <span>Please add a message and your name</span>}
          <Button disabled={loading ? true : false} type="submit">
            Send message
          </Button>
        </form>
      )}
      {sent && (
        <PlainText>
          Thanks! We appreciate you watching out for our kiddo. We'll be in
          touch soon.
        </PlainText>
      )}
    </>
  );
}