import styled from "styled-components";

export const Container = styled.div` 
    display: flex;
    align-items:center;
    justify-content:space-between;
`

export const Title = styled.div`
  font-size: 40px;
  font-family: sans-serif;
  font-weight: 600;


  color: ${({toggle}) => toggle && 'white'}
`;

export const Button = styled.button`
  border: none;
  background-color: #e1e1e1;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 16px;
  box-sizing: border-box;

  

  :hover {
    background-color: #ededed;
    cursor: pointer;
  }

  :active {
    transform: scale(0.95);
  }
`;