import styled from "styled-components";

export const Group = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 1px solid #7159c1;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
  background: #fff;

  &:focus {
    background: #7159c1;
    outline: none;
    cursor: pointer;
    padding-left: -10px;
    overflow: hidden;
    color: transparent;
    transition: background 0.5s;
  }
`;

export const Label = styled.label`
  margin-left: 10px;
  font-size: 16px;
  color: #7159c1;
`;
