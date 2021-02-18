const stats = require("./stats");

describe("stats", () => {
  it("최대값", () => {
    expect(stats.max([1, 2, 3, 4])).toBe(4);
  });

  it("최솟값", () => {
    expect(stats.min([1, 2, 3, 4])).toBe(1);
  });

  it("평균값", () => {
    expect(stats.avg([1, 2, 3, 4, 5])).toBe(3);
  });

  describe("median", () => {
    it("배열정렬", () => {
      expect(stats.sort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
    });
    it("홀수길이 중앙값", () => {
      expect(stats.median([1, 2, 3, 4, 5])).toBe(3);
    });
    it("짝수길이 중앙값", () => {
      expect(stats.median([1, 2, 3, 4, 5, 6])).toBe(3.5);
    });
  });

  describe("mode", () => {
    it("최빈값 1개", () => {
      expect(stats.mode([1, 2, 2, 2, 3])).toBe(2);
    });
    it("최빈값 없음", () => {
      expect(stats.mode([1, 2, 3])).toBe(null);
    });
    it("최빈값 여러개", () => {
      expect(stats.mode([1, 2, 2, 3, 3, 4])).toEqual([2, 3]);
    });
  });
});
