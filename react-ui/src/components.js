import Styled, { keyframes } from "styled-components";
import LocationOn from "@material-ui/icons/LocationOn";
import Confetti from 'react-confetti'
import { useWindowSize } from "react-use";
import { css } from '@emotion/core'
import PuffLoader from 'react-spinners/PuffLoader'

export const BigHeader = Styled.h1`
color: rgba(253,187,45,0.8);
font-weight: 200;
margin-bottom: 1.5rem;
font-size: 4rem;
letter-spacing: 0.9;
`;

export const Button = Styled.button`
padding: 12px 8px;
flex: 0 0 100%;
border: none;
display: block;
margin: 8px auto;
margin-bottom: 1em;
text-transform: uppercase;
letter-spacing: 0.5;
font-family: 'Lato', sans-serif;
background: rgba(253,187,45,0.6);
text-decoration: underline;
text-decoration-style: wavy;
text-decoration-color: rgba(52,37,5,0.2);
color: rgba(36,63,74,0.9);
cursor: pointer;
font-size: 18px;
border-radius: 8px;
transition: all 0.3s ease;
&:hover {
  background: rgba(253,187,45,1.0);
  box-shadow: 0px 3px 0 rgba(253,187,45,0.2);
  transform: translateY(-1px);
}
`;

export const PlainText = Styled.p`
font-size: 18px;
color: rgba(10, 15, 30, 0.8);
font-weight: 600;
`;

export const SmallText = Styled(PlainText)`
font-size: 24px;
color: #22c1c3;
font-weight: 600;
`;

export const LocationIcon = Styled(LocationOn)`
color: rgba(34, 193, 195, 0.8);
font-size: 4rem;
vertical-align: bottom;
`;

export const TextArea = Styled.textarea.attrs((props) => ({
  cols: 100,
  rows: 5
}))`
box-shadow: 0px 4px 0px rgba(34, 193, 195, 0.6);
font-size: 18px;
flex=basis: 400px;
border: 1px solid rgba(10, 15, 30, 0.1);
border-radius: 16px;
display: block;
box-sizing: padding-box;
margin: 8px 0;
font-family: 'Arial', sans-serif;
padding: 12px 16px;
padding-bottom: 8px;
transition: all 0.3s ease;
&:focus {
  border: 1px solid transparent;
  box-shadow: 0px 0px 0px 4px rgba(34, 193, 195, 0.6);
  outline: none;
}
`;

export const FlexWrapper = Styled.div`
display: flex;
justify-content: center;
min-width: 50%;
overflow-y: scroll;
flex-wrap: wrap;
`;

export const FlexChild = Styled.div`
flex: 1 1 100%;
`;

export const FormWrapper = Styled.div`
display: flex;
justify-content: center;
width: 400px;
flex-wrap: wrap;
margin: auto;
`;

export const TextInput = Styled.input`
flex-basis: 400px;
display: block;
border: 1px solid rgba(10, 15, 30, 0.1);
box-shadow: 0px 4px 0px rgba(34, 193, 195, 0.6);
padding: 12px 16px;
padding-bottom: 8px;
border-radius: 16px;
margin: 8px 0;
vertical-align;
font-size: 18px;
transition: all 0.3s ease;
&:focus {
  border: 1px solid transparent;
  box-shadow: 0px 0px 0px 4px rgba(34, 193, 195, 0.6);
  outline: none;
}
`;

const fadeout = keyframes`
0% {
  opacity: 100%;
  z-index: 10;
}

80% {
  opacity: 100%;
}

100% {
  opacity: 0%;
  z-index: -1;
}
`;

const appear = keyframes`
0% {
  opacity: 0.0;
}
100% {
  opacity: 1.0;
}
`


const Landing = Styled.div`
position: absolute;
top: 0;
left: 0;
height: 100vh;
width: 100vw;
opacity: 0%;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
background: rgba(34,193,195, 0.8);
background: linear-gradient(70deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1.0) 100%);
animation: 5s ${fadeout} ease;
overflow: hidden;
z-index: -1;
`;

const LandingText = Styled.h1`
color: rgba(10, 15, 30, 0.7);
font-size: 40px;
opacity: 1.0;
font-weight: 500;
text-align: center;
display: block;
`;

const LandingSubtitle = Styled.p`
color: rgba(10, 15, 30, 0.6);
font-size: 36px;
font-weight: 300;
text-align: center;
display: block;
opacity: 0.0;
line-height: 38px;
animation-name: ${appear};
animation-duration: 1s;
animation-timing-function: ease;
animation-fill-mode: forwards;
animation-delay: 2.0s;
`;


export const LandingPage = () => {
  const { height, width } = useWindowSize()
  return (
  <Landing>
    <Confetti
    run={true}
      recycle={false}
      width={width}
      height={height}
      confettiSource={{
        w: 10,
        h: 10,
        x: width / 2,
        y: height / 2,
      }}
    />
    <LandingText>Congratulations!</LandingText>
    <LandingSubtitle>You found a wild Mango!</LandingSubtitle>
  </Landing>
  )};

  export const SecondButton = Styled.button`
    background: transparent;
    border: 5px solid rgba(34, 193, 195, 0.8);
    background: rgba(34, 193, 195, 0.2);
    color: rgb(34, 193, 195);
    padding: 12px 8px;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    display: inline-block;
    transition: all 0.3s ease;
    border-radius: 16px;
    cursor: pointer;
    &:hover {
      background: rgba(34, 193, 195, 1);
      box-shadow: 0px 3px 0 rgba(24, 193, 195, 0.2);
      transform: translateY(-1px);
      color: rgba(255, 255, 255, 0.8)

    }
  `;

  const IconSpan = Styled.span`
    font-size: 3rem;
    color: rgb(34, 193, 195);
    width: 100%;
    display: block;
    &:hover{
      color: rgba(255, 255, 255, 0.8)!important;
    }
  `

export const IconLink = (props) => (
  <a href={props.href} alt={props.alt} style={{ display: "inline-block", width: "100%", margin: "0 16px" }}>
    <SecondButton>
      <IconSpan>
        {props.icon || ""}
      </IconSpan>
      {props.text}
    </SecondButton>
  </a>
);



export const Nav = Styled.ul`
display: flex;
justify-content: space-evenly;
align-items: center;
padding: 0;
`;

export const NavItem = Styled.li`
display: flex;
text-align: center;
margin: auto;
padding: 0;
justify-content: center;
flex-basis: 110px;
`;

export const NavWrap = Styled.nav`
position: sticky;
background: rgba(255,255,255,0.8);
top: 0;
z-index: 10;
transition: all 0.3s ease;
&:hover {
    background: rgba(255,255,255,1);
}
`;

export const Section = Styled.div`
margin: 2rem auto;
padding: 0.5rem;
padding-top: 2rem;
overflow: hidden;
`



export const Loader = ({ loading }) => {

const styles = css`
  display: block;
  margin: auto;
  color: rgb(34, 193, 195);
`;

  return (
    <PuffLoader
      css={styles}
      loading={loading}
      color="rgb(34, 193, 195)"
    />
  );
}