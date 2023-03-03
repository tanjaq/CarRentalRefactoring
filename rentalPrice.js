function calculateRentalPrice(driversAge, yearsOfExperience, carType, causedAnAccident, isSeason) {
  const causedAccident = 15;
  
  let rentalPrice = CalculateFromAge(driversAge, carType, isSeason)
  rentalPrice = CalculateFromExperience(yearsOfExperience, rentalPrice)
  rentalPrice = funct2(causedAnAccident, driversAge, rentalPrice)
  rentalPrice = funct1(rentalPrice)

  return rentalPrice;
}

exports.calculateRentalPrice = calculateRentalPrice

function funct1(rentalPrice) {
  const maxPrice = 1000
  if (rentalPrice > maxPrice) {
    rentalPrice = maxPrice;
  }
  return rentalPrice
}
function funct2(causedAnAccident, driversAge, rentalPrice) {
  if (causedAnAccident && driversAge < 30) {
    rentalPrice += causedAccident;
  }
  return rentalPrice
}

function CalculateFromExperience(yearsOfExperience, rentalPrice) {
  if (yearsOfExperience < 1) {
    return "Driver must hold driving licence for at least one year. Cannot rent a car!";
  }
  if (yearsOfExperience < 3) {
    rentalPrice *= 1.3;
  }
  return rentalPrice
}

function CalculateFromAge(driversAge, carType, isSeason) {
  let rentalPrice = driversAge;
  if (driversAge < 18) {
    return "Driver too young - cannot quote the price";
  }
  if (driversAge <= 21 && carType > 1) {
    return "Drivers 21 y/o or less can only rent Class 1 vehicles";
  }
  if (carType >= 4 && driversAge <= 25 && isSeason) {
    rentalPrice *= 1.5;
  }

  return rentalPrice
}

