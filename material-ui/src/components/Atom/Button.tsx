import React from "react";
import { Button, StylesProvider } from "@material-ui/core";
// import { styled } from "@material-ui/core/styles";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const StyleButton = styled(Button)<Props>`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  ${(props) => {
    const selected = props.theme.palette[props.color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, "#228be6")};
      }
      &:active {
        background: ${darken(0.1, "#228be6")};
      }
    `;
  }}

  /* 기타 */
  & + & {
    margin-left: 1rem;
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
  children?: React.ReactNode;
  color: string;
} & Record<string, any>;
const Component: React.FunctionComponent<Props> = ({ children, ...rest }) => {
  return (
    <StylesProvider injectFirst>
      <StyleButton {...rest}>children</StyleButton>
    </StylesProvider>
  );
};

export default Component;
