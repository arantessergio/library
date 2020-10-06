import styled from "styled-components";

import { SentimentDissatisfied } from "@material-ui/icons";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SadIcon = styled(SentimentDissatisfied)`
  font-size: 60px !important;
`;
