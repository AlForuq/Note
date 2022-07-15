import React, {useEffect, useState } from "react";
import { NodeList } from "./components/NodeList";
import { Container, Title } from "./RootStyle";
import { v4 as uuid } from "uuid";
import { Input } from "./components/Search/index";

export const Root = () => {
  const [notes, setNotes] = useState([
    {
      id: uuid(),
      text: "this is my first note!",
      date: "1/17/2022",
    },
    {
      id: uuid(),
      text: "this is my second note!",
      date: "4/12/2022",
    },
    {
      id: uuid(),
      text: "this is my third note!",
      date: "2/14/2022",
    },
    {
      id: uuid(),
      text: "this is my new note!",
      date: "1/4/2022",
    },
  ]);

  const [search, setSearch] = useState(notes);

  useEffect(() => {
    setSearch(notes);
  }, [notes]);

  const handleOnAdd = (valueTextArea) => {
    const date = new Date();
    setNotes([
      ...notes,
      { id: uuid(), text: valueTextArea, date: date.toLocaleString() },
    ]);
  };

  const onDelete = (id) => {
    let Filtered = notes.filter((note) => (note.id === id ? false : true));
    setNotes(Filtered);
  };

  // DID NOT WORK, MAY WORK IN CONTEXT API
  const onSearch = (param) => {
    const Searched = notes.filter((value) =>
      value.text.toLowerCase().includes(param.toLowerCase())
    );

    setSearch(Searched);
  };

  return (
    <Container>
      <Title>Notes</Title>
      <Input onSearch={onSearch} placeholder="Search for Notes" />
      <NodeList onDelete={onDelete} handleOnAdd={handleOnAdd} notes={search} />
    </Container>
  );
};
