import styled from "styled-components";
import { Paper as paper, Button as button } from "@material-ui/core";
import { KeyboardBackspace, Delete, Edit } from "@material-ui/icons";

export const Container = styled.div`
  padding: 20px;
`;

export const Paper = styled(paper)`
  padding: 20px;
  margin-bottom: 20px;
`;

export const BackIcon = styled(KeyboardBackspace)``;

export const TrashIcon = styled(Delete)``;

export const EditIcon = styled(Edit)``;

export const ActionsContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: flex-end;
`;

export const Button = styled(button)`
  margin: 0 8px;
`;
