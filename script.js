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

// Examples
console.log(isDate(new Date())); // true
console.log(isDate("2023-08-11")); // true
console.log(isDate("not a date")); // false
console.log(isDate(1691798400000)); // true (timestamp)
console.log(isDate({})); // false
console.log(isDate(null)); // false
