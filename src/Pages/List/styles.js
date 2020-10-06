import {
  Table as table,
  TableContainer as tableContainer,
  Button as button,
  InputBase,
  TextField as textField,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import styled from "styled-components";

export const Table = styled(table)`
  min-width: 650px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  padding-bottom: 20px;
`;

export const TableContainer = styled(tableContainer)`
  margin-bottom: 40px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0 20px;
  align-items: center;
`;

export const Button = styled(button)`
  margin: 0 8px !important;
`;

export const Input = styled(InputBase)`
  width: 100%;
  color: #fff !important;
`;

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100px;
  width: 100%;
  align-items: center;
  padding: 20px;
`;

export const YearFieldContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TextField = styled(textField)`
  margin: 0 8px !important;
`;

export const AddIcon = styled(Add)``;
