function isDate(input) {
  // Check if the input is a valid Date object
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // Check if the input is a string or number that can be parsed into a valid Date
  if (typeof input === "string" || typeof input === "number") {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate);
  }

  // For all other types, return false
  return false;
}

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
