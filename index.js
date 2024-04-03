// Code your solution here
// findMatching function
const findMatching = (drivers, name) => drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());

// fuzzyMatch function
const fuzzyMatch = (drivers, letters) => drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));

// matchName function
const matchName = (drivers, name) => drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
