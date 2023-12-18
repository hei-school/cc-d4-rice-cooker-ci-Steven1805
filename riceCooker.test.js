// riceCooker.test.js
const RiceCooker = require('./riceCooker');

test('Start cooking should return "Cooking started."', () => {
  const cooker = new RiceCooker();
  expect(cooker.startCooking()).toBe('Unable to start cooking. Please check rice and water measurements.');
});

test('Stop cooking should return "No cooking in progress."', () => {
  const cooker = new RiceCooker();
  expect(cooker.stopCooking()).toBe('No cooking in progress.');
});

test('Start cooking when already cooking should return "Unable to start cooking. Please check rice and water measurements."', () => {
  const cooker = new RiceCooker();
  cooker.setRiceMeasurement(2);
  cooker.setWaterMeasurement(4);
  cooker.startCooking();
  expect(cooker.startCooking()).toBe('Unable to start cooking. Please check rice and water measurements.');
});

test('Stop cooking when cooking should return "Cooking stopped."', () => {
  const cooker = new RiceCooker();
  cooker.setRiceMeasurement(2);
  cooker.setWaterMeasurement(4);
  cooker.startCooking();
  expect(cooker.stopCooking()).toBe('Cooking stopped.');
});

test('Check if cooking is in progress initially should return false.', () => {
  const cooker = new RiceCooker();
  expect(cooker.isCookingInProgress()).toBe(false);
});

test('Check if cooking is in progress after starting should return true.', () => {
  const cooker = new RiceCooker();
  cooker.setRiceMeasurement(2);
  cooker.setWaterMeasurement(4);
  cooker.startCooking();
  expect(cooker.isCookingInProgress()).toBe(true);
});

test('Check if cooking is in progress after stopping should return false.', () => {
  const cooker = new RiceCooker();
  cooker.setRiceMeasurement(2);
  cooker.setWaterMeasurement(4);
  cooker.startCooking();
  cooker.stopCooking();
  expect(cooker.isCookingInProgress()).toBe(false);
});

test('Check if rice is cooked during cooking should return true.', () => {
  const cooker = new RiceCooker();
  cooker.setRiceMeasurement(2);
  cooker.setWaterMeasurement(4);
  cooker.startCooking();
  expect(cooker.isRiceCooked()).toBe(true);
});

test('Check if rice is cooked when not cooking should return false.', () => {
  const cooker = new RiceCooker();
  expect(cooker.isRiceCooked()).toBe(false);
});

test('Get cooking status when not cooking should return "No cooking in progress."', () => {
  const cooker = new RiceCooker();
  expect(cooker.getCookingStatus()).toBe('No cooking in progress.');
});

test('Get cooking status during cooking should return "Cooking in progress."', () => {
  const cooker = new RiceCooker();
  cooker.setRiceMeasurement(2);
  cooker.setWaterMeasurement(4);
  cooker.startCooking();
  expect(cooker.getCookingStatus()).toBe('Cooking in progress.');
});

test('Stop and check cooking when not cooking should return "No cooking in progress."', () => {
  const cooker = new RiceCooker();
  expect(cooker.stopAndCheckCooking()).toBe('No cooking in progress.');
});

test('Stop and check cooking during cooking should return "Cooking stopped. Rice is cooked!"', () => {
  const cooker = new RiceCooker();
  cooker.setRiceMeasurement(2);
  cooker.setWaterMeasurement(4);
  cooker.startCooking();
  expect(cooker.stopAndCheckCooking()).toBe('Cooking stopped. Rice is cooked!');
});

test('Reset measurements should return "Measurements and cooking status reset."', () => {
  const cooker = new RiceCooker();
  cooker.setRiceMeasurement(2);
  cooker.setWaterMeasurement(4);
  cooker.startCooking();
  expect(cooker.resetMeasurements()).toBe('Measurements and cooking status reset.');
});
