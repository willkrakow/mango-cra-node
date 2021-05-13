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
import styled from 'styled-components'

const EmojiList = styled.ul`
list-style: none;

`

const EmojiItem = styled.li`
text-indent: -1.7em;
&::before {
  content: "${props => props.emoji} ";
  position: relative;
  font-size: 2rem;
  top: 0.2em;
}
`


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
        display: "grid",
        gridTemplateColumns: '1fr 1fr',
        gridColumnGap: '8px',
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
          My name's Mango, and I live in Hillsborough, NC at Bellevue Mill apartments. I
          like to hunt bugs and bully my brother (he's a doggo) and play frogger
          in the street.
        </p>
        <p style={{ textAlign: "left" }}>I mostly hang out around Bellevue and like to get my paws muddy in creeks and gutters.</p>
        <p style={{ textAlign: "left" }}>
          If you're reading this, you probably found me being a really good hunter or a really bad froggerer. Oops.
        </p>
        </FlexChild>
        <FlexChild>
        <h3 style={{ textAlign: "left" }}>What to do with me</h3>
        <EmojiList style={{ textAlign: "left" }}>
          <EmojiItem emoji="😸">
            Give me snoogles. (Don't worry, I got shot with rabbies. No...
            wait.. okay it was something like that.)
          </EmojiItem >
          <EmojiItem emoji="😸">
            Let my parents know where I am using the <a alt="Contact Mango's parents" href="#contactform" style={{ textDecorationStyle: 'wavy', textDecorationColor: 'rgb(34, 193, 195)' }}>form below ⬇️</a>. My mom is Laura and my Dad is Will and they are LAME but they feed me so that's cool I guess. If I'm not far from Bellevue, no need to worry them (unless of course you took some fab photos of me that you'd like to share).
          </EmojiItem >
          <EmojiItem emoji="😸">More snoogles pls.</EmojiItem >
          <EmojiItem emoji="😸">Don't feed me. I don't know when to stop. Gosh darn I love food.</EmojiItem>
        </EmojiList>
        </FlexChild>
        <FlexChild>
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
