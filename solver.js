exports.solve = function (dataToSolve) {
  dataToSolve = dataToSolve.toString().replace(/(\r\n|\n|\r)/gm,"");
  try {
    var toReturn = eval(dataToSolve).toString();
    process.stdout.write("Input: " + dataToSolve + " | ");
    process.stdout.write("Returning: " + toReturn + "\n");
    return toReturn;
  } catch (err) {
    process.stdout.write(err.toString());
    return "Invalid input";
  }
}
