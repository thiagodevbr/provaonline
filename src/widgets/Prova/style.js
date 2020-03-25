import styled from "styled-components";

export const SectionGroup = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:nth-child(even) {
    margin: 15px 0;
    background: #eee;
    border-radius: 5px;
  }

  section {
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      background: #999;
      border-radius: 3px;
      color: #fff;
      padding: 5px;
      max-width: 42px;
    }

    strong {
      flex: 1;
      font-size: 16px;
      font-weight: 600;
      margin-top: 5px;
    }

    p {
      font-size: 14px;
      margin-top: 14px;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 10px;
      font-size: 24px;
      cursor: pointer;
      color: #7159c1;
    }
  }
`;
