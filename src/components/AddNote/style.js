import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #6797cc;
  border-radius: 10px;
  padding: 1rem;
  min-height: 170px;
`;

export const Textarea = styled.textarea`
  background-color: #6797cc;
  border: none;
  resize: none;
  outline: none;

  font-size:16px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Small = styled.small``;

export const Button = styled.button`
  border: none;
  background-color: #e1e1e1;
  border-radius: 15px;
  padding: 5px 10px;

  :hover {
    background-color: #ededed;
    cursor: pointer;
  }

  :active{
    transform: scale(0.95)
  }
`;
