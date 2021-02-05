// const sum = require('./sum');
const { sum, sumOf } = require("./sum");

/*
    새로운 테스트 케이스를 만드는 함수
    테스트 케이스의 설명은 한국어로 적어도 상관 없다.
*/
// test('1+2 잘 더해진다', ()=> {
//     //https://jestjs.io/docs/en/using-matchers
//     expect(sum(1,2)).toBe(3); // 특정 값이 3 일 것이다.
// });

describe("sum", () => {
  it("1 + 2 연산 결과", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("배열의 연산 결과", () => {
    const array = [1, -2, 3, 4, 5];
    expect(sumOf(array)).toBe(11);
  });
});
