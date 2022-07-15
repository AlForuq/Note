import styled from "styled-components";
import { MdDeleteForever as DeleteIcon } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fef68a;
  border-radius: 10px;
  padding: 1rem;
  min-height: 170px;
`;

export const Span = styled.span`
  white-space: pre-wrap;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Small = styled.small``;

export const Delete = styled(DeleteIcon)`
  font-size: 1.3em;

  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  :active {
    transform: scale(0.95 );
  }
`;
