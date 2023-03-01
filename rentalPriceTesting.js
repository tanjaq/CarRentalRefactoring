function calcPriceForRent(age, licence, clazz, hasCausedAccidents, hasParticipatedInAccidents, isHighSeason) {
    let rentalPrice = age.Number;
  
    if (isDriverTooYoung(age)) {
      return { success: false, message: "Driver too young - cannot quote the price" };
    }
  
    if (isClassRestrictedForYoungDrivers(age, clazz)) {
      return { success: false, message: "Drivers 21 y/o or less can only rent Class 1 vehicles" };
    }
  
    if (isHighSeasonPriceApplicable(age, clazz, isHighSeason)) {
      rentalPrice = applyHighSeasonPrice(rentalPrice);
    }
  
    if (isLicenceDurationNotEnough(licence)) {
      return { success: false, message: "Driver must hold driving licence at least for one year. Can not rent a car!" };
    }
  
    rentalPrice = applyLicenceDurationDiscount(rentalPrice, licence);
  
    rentalPrice = applyAccidentSurcharge(rentalPrice, age, hasCausedAccidents, hasParticipatedInAccidents);
  
    rentalPrice = applyRentalPriceLimit(rentalPrice);
  
    return { success: true, message: "Success", result: rentalPrice };
  }
  
  // Age functions
  function isDriverTooYoung(age) {
    /* if (typeof age !== 'number') {
      throw new Error('Invalid input type: age must be a number')
    } */
    return age.Number < 18;
  }
  
  function isClassRestrictedForYoungDrivers(age, clazz) {
    return age.Number <= 21 && clazz > 2;
  }
  
  function isHighSeasonPriceApplicable(age, clazz, isHighSeason) {
    return clazz >= 4 && age.Number <= 25 && isHighSeason;
  }
  
  function applyHighSeasonPrice(rentalPrice) {
    return rentalPrice * 2;
  }
  
  // Licence functions
  function isLicenceDurationNotEnough(licence) {
    return licence < 1;
  }
  
  function isLicenceDurationLessThanThreeYears(licence) {
    return licence < 3;
  }
  
  function applyLicenceDurationDiscount(rentalPrice, licence) {
    if (isLicenceDurationLessThanThreeYears(licence)) {
      return rentalPrice * 1.3;
    }
    return rentalPrice;
  }
  
  // Accident functions
  function hasCausedAccidentsForYoungDriver(age, hasCausedAccidents) {
    return hasCausedAccidents && age < 30;
  }
  
  function hasParticipatedInAccidentsF(age, hasParticipatedInAccidents) {
    return hasParticipatedInAccidents && age > 30;
  }
  
  function applyAccidentSurcharge(rentalPrice, age, hasCausedAccidents, hasParticipatedInAccidents) {
    if (hasCausedAccidentsForYoungDriver(age, hasCausedAccidents)) {
      return rentalPrice + 15;
    }
    if (hasParticipatedInAccidentsF(age, hasParticipatedInAccidents)) {
      return rentalPrice - 10;
    }
    return rentalPrice;
  }
  
  // Rental price limit
  function isRentalPriceExceededMaxValue(rentalPrice) {
    return rentalPrice > 1000;
  }
  
  function applyRentalPriceLimit(rentalPrice) {
    if (isRentalPriceExceededMaxValue(rentalPrice)) {
      return 1000;
    }
    return rentalPrice;
  }
  
  module.exports = { calcPriceForRent };
  
  // Better version of object orienting programming
  /* 
  const result = price({
    age: 25,
    licence: 2,
    clazz: 4,
    acc: false,
    acc2: false,
    season: true
  });
    */
    
    /* const result = rental.price({
      age: 25,
      licence: 2,
      clazz: 4,
      acc: false,
      acc2: false,
      season: true
    });  */
  
  /* const result = rental.price({
    age: Number(post.age),
    licence: Number(post.licence),
    clazz: Number(post.clazz),
    acc: parseBool(post.acc),
    acc2: parseBool(post.acc2),
    season: parseBool(post.season)
  }); */
  
   