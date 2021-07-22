import React from "react";
import { Button } from "@material-ui/core";
// import { styled } from "@material-ui/core/styles";
import styled from 'styled-components';
import { darken, lighten } from 'polished';

const StyleButton = styled(Button)`
  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: #228be6;
  &:hover {
    background: ${lighten(0.1, '#228be6')};
  }
  &:active {
    background: ${darken(0.1, '#228be6')};
  }
`;

// const StyleButton = styled(Button)({
//   /* 크기 */
//   height: "3.25rem",
//   fontsize: "4rem",
//   background: `${lighten(0.1, "#228be6")}`,
//   '&:hover': {
//     background: "#f00",
//  },
// });

type Props = {
  children?: React.ReactNode
} & Record<string, any>;
const Component: React.FunctionComponent<Props> = ({ children,...rest }) => {
  return <StyleButton {...rest}>children</StyleButton>;
};

export default Component;
