import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #eee;
  border-radius: 3px;
  justify-content: space-between;
  line-height: 30px;
  font-size: 12px;

  div {
    display: flex;
    flex-direction: row;

    .number_question {
      padding: 0 15px;
      color: #7159c1;
      font-size: 12px;
    }

    .cod_question {
      padding: 0 15px;
      background: #7159c1;
      border-radius: 2px;
      color: #eee;
    }

    .mat_question {
      padding: 0 5px 0 20px;
      color: #7159c1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;

      svg {
        margin-left: 5px;
      }
    }
    .cat_mat_question {
      color: #7159c1;
      font-weight: 600;
    }
  }
`;

export const SubHeader = styled.span`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #eee;
  justify-content: left;
  line-height: 40px;
  font-size: 12px;
  padding: 0 15px;
  flex: 1;
  color: #7159c1;

  span {
    & + span {
      margin-left: 20px;
    }

    strong {
      margin-right: 5px;
      text-transform: uppercase;
    }
  }
`;

export const ImgAssociated = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  span {
    cursor: pointer;
    font-size: 12px;
    color: #7159c1;
    font-weight: 600;
    margin-bottom: 30px;
  }

  img {
    animation: 2s ${keyframes`${fadeIn}`};
    width: 60%;
  }
`;

export const Question = styled.div`
  padding: 30px;
  flex: 1;

  p {
    margin-bottom: 15px;
    color: #333;
    font-size: 14px;
  }
`;

export const Footer = styled.span`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #eee;
  border-top: 2px solid #eee;
  justify-content: center;
  align-items: center;
  line-height: 40px;
  font-size: 12px;
  padding: 0 5px;
  flex: 1;
  color: #7159c1;

  svg {
    margin-right: 5px;
  }

  span {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    & + span {
      margin-left: 20px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const Warning = styled.div`
  svg {
    transform: rotate(10deg);
    border: 5px dashed #003399;
    color: #003399;
    width: 120px;
    height: 60px;
    padding: 10px 20px;
    font-size: 2.5em;
  }
`;
