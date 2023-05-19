const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

const calculator = (type, x, y) => {
  x = x ? evaluate(x) : null;
  y = y ? evaluate(y) : null;

  switch (type) {
    case "add":
      return x + y;
    case "subtract":
      return x - y;
    case "multiply":
      return x * y;
    case "divide":
      if (y === 0) throw new Error("MathError");
      return x / y;
    case "exponent":
      return x ** y;
    case "factorial":
      if (x < 0 || y < 0) throw new Error("MathError");
      return factorial(x || y);
    case "negative":
      return -1 * (x || y);
    case "positive":
      return x || y;
    case "sin":
      return Math.sin(x || y);
    case "cos":
      return Math.cos(x || y);
    case "tan":
      return Math.tan(x || y);
    case "sqrt":
      return Math.sqrt(x || y);
  }
};

const evaluate = (node) => {
  const { type, text, leftChild, rightChild } = node;
  if (type === "function" || type === "operator")
    return calculator(text, leftChild, rightChild);
  return parseFloat(node.node);
};
