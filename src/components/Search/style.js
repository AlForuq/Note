import styled from "styled-components";
import { FcSearch as searchIcon } from "react-icons/fc";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 5px;
  width: 100%;
  height: 35px;
  border-radius: 15px;
  background-color: #e9e9e9;
  padding: 0 15px;
  box-sizing: border-box;
  margin: 15px 0;
`;

export const InputTag = styled.input`
  border: none;
  background-color: inherit;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  font-family: sans-serif;
  font-size:16px;
`;

export const Icon = styled(searchIcon)`
  font-size: 25px;
  box-sizing: border-box;
`;
