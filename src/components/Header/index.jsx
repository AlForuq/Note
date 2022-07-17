import React from "react";
import { Container, Title, Button } from "./style";

export const Header = ({toggle,handleDarkMode}) => {
  return (
    <Container>
      <Title toggle={toggle} >Notes</Title>
      <Button onClick={() => handleDarkMode((previousValue)=> !previousValue)}>{ toggle ? 'Dark Mode' : 'White Mode'}</Button>
    </Container>
  );
};
