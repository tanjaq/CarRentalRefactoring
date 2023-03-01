// driversAge - age of driver
// yearsOfExperience - number of full years person holds driving licence
// carType - class of the car from 1 (smallest) to 5 (largest) that person wishes to rent
// causedAnAccident - has s/he caused any accidents within last year
// includedInAccident - has s/he participated (but not caused) in any accidents within last year
// isSeason - if it service is demanded or not
function price(driversAge, yearsOfExperience, carType, causedAnAccident, wasInAccident, isSeason) {
  var rentalPrice = driversAge;

  if (driversAge < 18) {
    return "Driver too young - cannot quote the price";
  }
  if (driversAge <= 21 && carType > 2) {
    return "Drivers 21 y/o or less can only rent Class 1 vehicles";
  }
  if (carType >= 4 && driversAge <= 25 && isSeason !== false) {
    rentalPrice = rentalPrice * 2;
  }
  if (yearsOfExperience < 1) {
    return "Driver must hold driving licence at least for one year. Can not rent a car!";
  }
  if (yearsOfExperience < 3) {
    rentalPrice = rentalPrice * 1.3;
  }
  if (causedAnAccident == true && driversAge < 30) {
    rentalPrice = rentalPrice + 15;
  }
  if (rentalPrice > 1000) {
    return 1000.0;
  }
  return rentalPrice;
}
exports.price = price;
