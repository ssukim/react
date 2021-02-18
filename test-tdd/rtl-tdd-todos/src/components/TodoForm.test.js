import React from "react";
import "@testing-library/jest-dom";
import TodoForm from "./TodoForm";
import { fireEvent, render } from "@testing-library/react";

describe("<TodoForm />", () => {
  const setup = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const { getByText, getByPlaceholderText } = utils;
    const input = getByPlaceholderText("할 일을 입력하세요"); //입력이 있는지 확인
    const button = getByText("등록"); // 버튼이 있는지 확인
    return {
      ...utils,
      input,
      button,
    };
  };
  
  it("입력, 버튼 확인", () => {
    // const { getByText, getByPlaceholderText } = render(<TodoForm />);
    // getByPlaceholderText("할 일을 입력하세요"); // 입력이 있는지 확인
    // getByText("등록"); // 버튼이 있는지 확인
    
    //리팩토링
    const {input, button} = setup();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("입력 변경", () => {
    const { getByPlaceholderText } = render(<TodoForm />);
    const input = getByPlaceholderText("할 일을 입력하세요");
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    expect(input).toHaveAttribute("value", "TDD 배우기");
  });

  it("삽입 호출, 입력 초기화", () => {
    const onInsert = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <TodoForm onInsert={onInsert} />
    );
    const input = getByPlaceholderText("할 일을 입력하세요");
    const button = getByText("등록");
    // 수정하고
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    //버튼클릭
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("TDD 배우기"); // onInsert 가 'TDD 배우기' 파라미터가 호출됐어야함
    expect(input).toHaveAttribute("value", "");
  });
});
