import React, { useEffect, useState } from "react";
import { NodeList } from "./components/NodeList";
import { Container, MainWrapper } from "./RootStyle";
import { v4 as uuid } from "uuid";
import { Input } from "./components/Search/index";
import { Header } from "./components/Header";

export const Root = () => {
  const [toggle, setToggle] = useState(false);
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
    setSearch(notes)
  }, [notes]);

    useEffect(() => {
      const savedNotes = JSON.parse(
        localStorage.getItem("react-notes-app-data")
      );

      if (savedNotes) {
        setNotes(savedNotes);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    }, [notes]);




  const handleOnAdd = (valueTextArea) => {
    const date = new Date();
    const newNote = {
      id: uuid(),
      text: valueTextArea,
      date: date.toLocaleString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const onDelete = (id) => {
    let Filtered = notes.filter((note) => (note.id === id ? false : true));
    setNotes(Filtered);
  };

  const onSearch = (param) => {
    const Searched = notes.filter((value) =>
      value.text.toLowerCase().includes(param.toLowerCase())
    );

    setSearch(Searched);
  };

  return (
    <MainWrapper toggle={toggle}>
      <Container>
        <Header toggle={toggle} handleDarkMode={setToggle} />
        <Input
          onSearch={onSearch}
          placeholder="Search for Notes" />
        <NodeList
          onDelete={onDelete}
          handleOnAdd={handleOnAdd}
          // notes={notes.filter((note) =>
          //   note.text.toLowerCase().includes(search.toLowerCase())
          // )}
          notes={search}
        />
      </Container>
    </MainWrapper>
  );
};
