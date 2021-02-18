import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("스냅샷 매칭", () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot();
  });
  it("두개의 버튼을 갖고있는지", () => {
    const utils = render(<Counter />);
    //버튼과 숫자가 있는지 확인
    utils.getByText("0");
    utils.getByText("+1");
    utils.getByText("-1");
  });
  it("증가버튼", () => {
    const utils = render(<Counter />);
    const number = utils.getByText("0");
    const plusButton = utils.getByText("+1");
    // 클릭 이벤트를 두번 발생시키기
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(number).toHaveTextContent("2"); // jest-dom 의 확장 matcher 사용
    expect(number.textContent).toBe("2"); // textContent 를 직접 비교
  });
  it("감소 버튼", () => {
    const utils = render(<Counter />);
    const number = utils.getByText("0");
    const minusButton = utils.getByText("-1");
    // 클릭 이벤트를 두번 발생시키기
    fireEvent.click(minusButton);
    fireEvent.click(minusButton);
    expect(number).toHaveTextContent("-2"); // jest-dom 의 확장 matcher 사용
  });
});
