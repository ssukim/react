const sum = (a, b) => {
  // return a - b; // Error Case
  return a + b;
};

const sumOf = (numbers) => {
    /*
    let result = 0;
    numbers.forEach(n => {
        result += n;
    });
    return result;  
    */

  //리팩토링//
  return numbers.reduce((acc, current) => acc + current, 0);
};

// 내보내기
//module.exports = sum;

// 각각 내보내기
exports.sum = sum;
exports.sumOf = sumOf;
