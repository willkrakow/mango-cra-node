import React, { useRef } from 'react'
import Pics from './Pics'
import Description from './description'
import { Button, Nav, NavWrap, NavItem, Section } from './components'
import Form from './Form'
import './styles.css'
export default function Routes() {

    const formRef = useRef(null);
    const picsRef = useRef(null);
    const homeRef = useRef(null)

    const handleClick = (toRef) => {
        toRef.current.scrollIntoView();
    }
return (
  <div className="App">
    <NavWrap>
      <Nav>
        <NavItem>
          <Button onClick={() => handleClick(homeRef)}>Home</Button>
        </NavItem>
        <NavItem>
          <Button onClick={() => handleClick(formRef)}>Contact</Button>
        </NavItem>
        <NavItem>
          <Button onClick={() => handleClick(picsRef)}>
            Gallery
          </Button>
        </NavItem>
      </Nav>
    </NavWrap>
    <Section ref={homeRef}>
      <Description />
    </Section>
    <Section ref={formRef}>
        <Form />
    </Section>
    <Section ref={picsRef}>
        <Pics />
    </Section>
  </div>
);}