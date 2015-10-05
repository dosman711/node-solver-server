exports.solve = function (dataToSolve) {
  // Remove newlines from the end of the data to make processing more clean
  dataToSolve = dataToSolve.toString().replace(/(\r\n|\n|\r)/gm,"");
  try {
    var firstOperand = 0;
    var secondOperand = 0;
    var operator = null;
    var equalsFound = false;
    for (var i = 0; i < dataToSolve.length; i++) {
      var curVal = dataToSolve[i];
      if (curVal === " ") {
        continue;
      } else if (equalsFound) {
        throw "Nothing allowed after equals sign";
      } else if (curVal === "=") {
        equalsFound = true;
      } else if (!isNaN(Number.parseInt(curVal))) {
        if (operator === null) {
          firstOperand = (firstOperand * 10) + Number.parseInt(curVal);
        } else {
          secondOperand = (secondOperand * 10) + Number.parseInt(curVal);
        }
      } else if (curVal === "+" && operator === null) {
        operator = "plus";
      } else if (curVal === "-" && operator === null) {
        operator = "minus";
      } else if (curVal === "*" && operator === null) {
        operator = "multiply";
      } else if (curVal === "/" && operator === null) {
        operator = "divide";
      } else {
        throw "Invalid character found";
      }
    }
    
    var toReturn = firstOperand;
    if (operator != null) {
      switch (operator) {
        case "plus":
          toReturn += secondOperand;
          break;
        case "minus":
          toReturn -= secondOperand;
          break;
        case "multiply":
          toReturn *= secondOperand;
          break;
        case "divide":
          toReturn /= secondOperand;
          break;
      }
    }
    process.stdout.write("Input: " + dataToSolve + " | ");
    process.stdout.write("Returning: " + toReturn + "\n");
    return toReturn;
  } catch (err) {
    process.stdout.write(err.toString() + "\n");
    return "Invalid input";
  }
}
