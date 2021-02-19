var n = function (digit) {
  return function (op) {
    return op ? op(digit) : digit;
  };
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) {
  return function (l) {
    return l + r;
  };
}
function minus(r) {
  return function (l) {
    return l - r;
  };
}
function times(r) {
  return function (l) {
    return l * r;
  };
}
function dividedBy(r) {
  return function (l) {
    return l / r;
  };
}

[
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
].forEach(function (funName, i) {
  this[funName] = function (operation) {
    return operation ? operation(i) : i;
  };
});

function plus(operandRight) {
  return function (operandLeft) {
    return operandLeft + operandRight;
  };
}
function minus(operandRight) {
  return function (operandLeft) {
    return operandLeft - operandRight;
  };
}
function times(operandRight) {
  return function (operandLeft) {
    return operandLeft * operandRight;
  };
}
function dividedBy(operandRight) {
  return function (operandLeft) {
    return operandLeft / operandRight;
  };
}

const [
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
] = Array.from({ length: 10 }).map((item, i) => (f) => (f ? f(i) : i));

const [plus, minus, times, dividedBy] = ["+", "-", "*", "/"].map((op) =>
  Function("b", `return a => a ${op} b`)
);
