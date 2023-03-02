const calculator = () => {
  let result = 0;
  return (number, operator) => {

    switch (operator) {
      case '+':
        result = result + number;
        break;
      case '-':
        result = result - number;
        break;
      case '*':
        result = result * number;
        break;
      case '/':
        result = result / number;
        break;
      default:
        console.log("Invalid operator");

        return;
    };
    console.log(result);
  };
};

const calc = calculator();

calc(5, "+");
calc(2, "*");
calc(3, "-");
calc(2, "*");
calc(7, "/");