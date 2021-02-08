import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("스냅샷 매칭", () => {
    const utils = render(<Profile username="ssukim" name="김정수" />);
    expect(utils.container).toMatchSnapshot();
  });
  it('자식 요소 확인', () => {
    const utils = render(<Profile username="ssukim2" name="김정수" />);
    utils.getByText('ssukim2'); // ssukim 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText('(김정수)'); // (김정수) 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/김/); // 정규식 /김/ 을 통과하는 엘리먼트가 있는지 확인
  })
});
