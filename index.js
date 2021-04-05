// Write your solution in this file!
const driver = {
  name: 'Sam',
  address: '11 Broadway'
};

function updateDriverWithKeyAndValue(driver, name, value) {
  // Alternate using ES6 Spread operators:
  // return { ...driver, ...{ [key]: value } }
//   return Object.assign({}, driver, { [key]: value });
return Object.assign({}, driver, { [name]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key) {
  // Alternate using ES6 Spread operators:
  // const newObj = { ...driver }
  const newdriver = Object.assign({}, driver);

  delete newdriver[key];

  return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}