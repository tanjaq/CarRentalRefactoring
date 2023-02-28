function calculateRentalPrice(age, licence, clazz, hasCausedAccidents, hasParticipatedInAccidents, isHighSeason) {
  let rentalPrice = age;

  if (isDriverTooYoung(age)) {
    return { success: false, message: "Driver too young - cannot quote the price" };
  }

  if (isClassRestrictedForYoungDrivers(age, clazz)) {
    return { success: false, message: "Drivers 21 y/o or less can only rent Class 1 vehicles" };
  }

  if (isHighSeasonPriceApplicable(age, clazz, isHighSeason)) {
    rentalPrice = rentalPrice * 2;
  }

  if (isLicenceDurationNotEnough(licence)) {
    return { success: false, message: "Driver must hold driving licence at least for one year. Can not rent a car!" };
  }

  if (isLicenceDurationLessThanThreeYears(licence)) {
    rentalPrice = rentalPrice * 1.3;
  }

  if (hasCausedAccidentsForYoungDriver(age, hasCausedAccidents)) {
    rentalPrice = rentalPrice + 15;
  }

  if (isRentalPriceExceededMaxValue(rentalPrice)) {
    rentalPrice = 1000.0;
  }
  if(hasParticipatedInAccidentsForOlderDriver(age, hasParticipatedInAccidents)){
    rentalPrice -= 10;
  }

  return { success: true, message: "Success", result: rentalPrice };
}

// All functions
function isDriverTooYoung(age) {
  return age < 18;
}

function isClassRestrictedForYoungDrivers(age, clazz) {
  return age <= 21 && clazz > 2;
}

function isHighSeasonPriceApplicable(age, clazz, isHighSeason) {
  return clazz >= 4 && age <= 25 && isHighSeason;
}

function isLicenceDurationNotEnough(licence) {
  return licence < 1;
}

function isLicenceDurationLessThanThreeYears(licence) {
  return licence < 3;
}

function hasCausedAccidentsForYoungDriver(age, hasCausedAccidents) {
  return hasCausedAccidents && age < 30;
}

function isRentalPriceExceededMaxValue(rentalPrice) {
  return rentalPrice > 1000;
}
function hasParticipatedInAccidentsF(age, hasParticipatedInAccidents)
{
  return hasParticipatedInAccidents && age > 30;
}

module.exports = { calculateRentalPrice };

/* if (hasParticipatedInAccidents) {
  rentalPrice += 10;
} */