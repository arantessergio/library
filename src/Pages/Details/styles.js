import styled from "styled-components";
import { Paper as paper } from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";

export const Container = styled.div`
  padding: 20px;
`;

export const Paper = styled(paper)`
  padding: 20px;
  margin-bottom: 20px;
`;

export const BackIcon = styled(KeyboardBackspace)``;
