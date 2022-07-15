import React, { useState } from "react";
import { Container, Button, Footer, Small, Textarea } from "./style";

export const AddNote = ({ handleOnAdd }) => {
  const [noteText, setNoteText] = useState("");
  
  const limit = 200;
  const handleTextArea = (e) => {
    if (limit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }


    // console.log(e.target.value);
  };

  
  const handleOnSave = () => {
    if (noteText.trim().length) {
      handleOnAdd(noteText);
    }
    setNoteText("");

  };
  return (
    <Container>
      <Textarea
        onChange={handleTextArea}
        value={noteText}
        cols="10"
        rows="8"
        // maxLength={'10'}
        placeholder="Type to add a Note"
      />
      <Footer>
        <Small>{limit - noteText.length} Remaining</Small>
        <Button onClick={handleOnSave}>Save</Button>
      </Footer>
    </Container>
  );
};
