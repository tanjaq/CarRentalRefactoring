function isDriverEligible(age, carClass) {
  if (age < 18) {
    return false;
  }
  if (age <= 21 && carClass > 2) {
    return false;
  }
  return true;
}

function isLicenseValid(licenseYears) {
  if (licenseYears < 1) {
    return false;
  }
  return true;
}


function isAccidentProne(hasAccident, hasParticipatedAccident, age) {
  if (hasAccident || (hasParticipatedAccident && age < 30)) {
    return true;
  }
  return false;
}

function calculateRentalPrice(age, licenseYears, carClass, hasAccident, hasParticipatedAccident, isHighSeason) {
  const Eligible = isDriverEligible(age, carClass);
  const validLicense = isLicenseValid(licenseYears);
  const AccidentProne = isAccidentProne(hasAccident, hasParticipatedAccident, age);
  
  if (!Eligible) {
    return "Driver is not eligible to rent a car";
  }
  
  if (!validLicense) {
    return "Driver must hold a driving license for at least one year. Cannot rent a car!";
  }
  if(!AccidentProne)
  {
    return "It's heartening to see that there are still good people in the world.";
  }
  
  
  let rentalPrice = age;
  
  if (carClass >= 4 && age <= 25 && isHighSeason) {
    rentalPrice *= 2;
  }
  
  if (licenseYears < 3) {
    rentalPrice *= 1.3;
  }
  
  if (isAccidentProne) {
    rentalPrice += 15;
  }
  
  if (rentalPrice > 1000) {
    rentalPrice = 1000;
  }
  
  return rentalPrice;
}

module.exports = {
  calculateRentalPrice: calculateRentalPrice,
  isDriverEligible: isDriverEligible,
  isLicenseValid: isLicenseValid,
  isAccidentProne: isAccidentProne
};