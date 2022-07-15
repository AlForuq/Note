import React from "react";
import { AddNote } from "../AddNote";
import { Node } from "../Node";
import { Container } from "./style";

export const NodeList = ({ onDelete, notes, handleOnAdd }) => {
  


  return (
    <Container>
      {notes.map((node) => (
        <Node key={node.id} onDelete={onDelete} node={node} />
      ))}
      <AddNote handleOnAdd={handleOnAdd} />
    </Container>
  );
};
