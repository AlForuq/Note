import React from "react";
import { Container, Delete, Footer, Small, Span } from "./style";

export const Node = ({ onDelete, node }) => {
  return (
    <Container >
      <Span>{node.text}</Span>
      <Footer>
        <Small>{node.date}</Small>
        <Delete onClick={()=> onDelete(node.id)} />
      </Footer>
    </Container>
  );
};
