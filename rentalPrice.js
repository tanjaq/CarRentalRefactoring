// driverAge - The driverAge of the driver.return
// licenceRetention - The number of full years the person has held a driving licenceRetention.
// carClass - The class of the car from 1 (smallest) to 5 (largest) that person wishes to rent.
// hasAccident - has s/he caused any accidents within last year
// isHighSeason - Whether it is high isHighSeason or not.

function calculateRentalPrice(driverAge, carClass, isHighSeason) {
  let rentalprice = driverAge;

  if (driverAge < 18) {
    return "Driver too young - cannot quote the price";
  }

  if (driverAge <= 21 && carClass > 1) {
    return "Drivers 21 y/o or less can only rent Class 1 vehicles";
  }

  if (carClass >= 4 && driverAge <= 25 && isHighSeason) {
    rentalprice = rentalprice + rentalprice / 2;
  }

  return rentalprice;
}

function applyLicenceRetentionDiscount(rentalprice, licenceRetention) {
  if (licenceRetention < 1) {
    return "Driver must hold driving licenceRetention at least for one year. Can not rent a car!";
  }

  if (licenceRetention < 3) {
    rentalprice = rentalprice + rentalprice % 30;
  }

  return rentalprice;
}

function applyAccidentSurcharge(rentalprice, hasAccident, carClass) {
  if (hasAccident && carClass < 30) {
    rentalprice = rentalprice + 15;
  }

  return rentalprice;
}

function capRentalPrice(rentalprice) {
  if (rentalprice > 1000) {
    return 1000;
  }

  return rentalprice;
}

function price(driverAge, licenceRetention, carClass, hasAccident, isHighSeason) {
  let rentalprice = calculateRentalPrice(driverAge, carClass, isHighSeason);
  rentalprice = applyLicenceRetentionDiscount(rentalprice, licenceRetention);
  rentalprice = applyAccidentSurcharge(rentalprice, hasAccident, carClass);
  rentalprice = capRentalPrice(rentalprice);
  
  return rentalprice;
}

exports.price = price;
