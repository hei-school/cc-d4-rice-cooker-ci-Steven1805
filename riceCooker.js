// riceCooker.js

const readline = require('readline');

class RiceCooker {
  constructor() {
    this.isCooking = false;
    this.riceMeasurement = 0; // en tasses
    this.waterMeasurement = 0; // en tasses
  }

  setRiceMeasurement(tasses) {
    this.riceMeasurement = tasses;
  }

  setWaterMeasurement(tasses) {
    this.waterMeasurement = tasses;
  }

  startCooking() {
    if (!this.isCooking && this.riceMeasurement > 0 && this.waterMeasurement > 0) {
      this.isCooking = true;
      return `Cooking started with ${this.riceMeasurement} cups of rice and ${this.waterMeasurement} cups of water.`;
    } else {
      return "Unable to start cooking. Please check rice and water measurements.";
    }
  }

  stopCooking() {
    if (this.isCooking) {
      this.isCooking = false;
      return "Cooking stopped.";
    } else {
      return "No cooking in progress.";
    }
  }

  isRiceCooked() {
    if (this.isCooking) {
      // Logic to check if rice is cooked (for simplicity, always true for demonstration)
      return true;
    } else {
      return false;
    }
  }

  getCookingStatus() {
    return this.isCooking ? "Cooking in progress." : "No cooking in progress.";
  }

  stopAndCheckCooking() {
    if (this.isCooking) {
      this.isCooking = false;
      const isRiceCooked = this.isRiceCooked() ? "Rice is cooked!" : "Rice is not cooked.";
      return `Cooking stopped. ${isRiceCooked}`;
    } else {
      return "No cooking in progress.";
    }
  }

  resetMeasurements() {
    this.isCooking = false;
    this.riceMeasurement = 0;
    this.waterMeasurement = 0;
    return "Measurements and cooking status reset.";
  }
}

// Interface de ligne de commande simple
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cooker = new RiceCooker();

function promptUser() {
  rl.question('Choose an action (1-7):\n1. Start Cooking\n2. Stop Cooking\n3. Check Cooking Status\n4. Stop and Check Cooking\n5. Reset Measurements\n6. Set Rice Measurement\n7. Set Water Measurement\n', (answer) => {
    switch (answer) {
      case '1':
        console.log(cooker.startCooking());
        break;
      case '2':
        console.log(cooker.stopCooking());
        break;
      case '3':
        console.log(cooker.getCookingStatus());
        break;
      case '4':
        console.log(cooker.stopAndCheckCooking());
        break;
      case '5':
        console.log(cooker.resetMeasurements());
        break;
      case '6':
        rl.question('Enter the rice measurement in cups: ', (riceMeasurement) => {
          cooker.setRiceMeasurement(parseFloat(riceMeasurement));
          console.log(`Rice measurement set to ${riceMeasurement} cups.`);
          promptUser();
        });
        return;
      case '7':
        rl.question('Enter the water measurement in cups: ', (waterMeasurement) => {
          cooker.setWaterMeasurement(parseFloat(waterMeasurement));
          console.log(`Water measurement set to ${waterMeasurement} cups.`);
          promptUser();
        });
        return;
      default:
        console.log('Invalid choice. Please enter a number between 1 and 7.');
    }
    promptUser();
  });
}

promptUser();
