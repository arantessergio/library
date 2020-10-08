import styled from "styled-components";
import {
  FormControl as formControl,
  Button as button,
} from "@material-ui/core";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 350px;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  -webkit-box-shadow: 7px 7px 40px 0px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 7px 7px 40px 0px rgba(0, 0, 0, 0.38);
  box-shadow: 7px 7px 40px 0px rgba(0, 0, 0, 0.38);
`;

export const FormControl = styled(formControl)`
  margin-bottom: 10px !important;
`;
export const Button = styled(button)`
  width: 100%;
  margin-bottom: 10px !important;
`;
