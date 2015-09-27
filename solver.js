exports.solve = function (dataToSolve) {
  try {
    var toReturn = eval(dataToSolve).toString();
    process.stdout.write("Input: " + dataToSolve);
    process.stdout.write("Returning: " + toReturn);
    return toReturn;
  } catch (err) {
    process.stdout.write(err.toString());
    return "Invalid input";
  }
}
