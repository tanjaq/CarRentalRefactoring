function calculateRentalPrice(driverAge, driverLicenseYears, carClass, recentAccidents, isHighSeason) 
{
  const MINIMUM_LICENSE_YEARS = 1;
  const MINIMUM_DRIVING_AGE = 18;
  const MAXIMUM_RENTAL_PRICE = 1000;

  let rentalPrice = driverAge;

  if (driverAge < MINIMUM_DRIVING_AGE) {
    return 'Driver is too young - cannot quote the price.';
  }

  if (driverAge <= 21 && carClass > 1) {
    return 'Drivers 21 y/o or less can only rent Class 1 vehicles.';
  }

  if (driverLicenseYears < MINIMUM_LICENSE_YEARS) {
    return 'Driver must hold driving license for at least one year. Cannot rent a car!';
  }

  if (driverLicenseYears < 3) {
    rentalPrice *= 1.3;
    return 'Since you have driving license for less than 3 years, you will be charged 30% more.';
  }

  if ((carClass === 4 || carClass === 5) && driverAge <= 25 && isHighSeason) {
    rentalPrice *= 1.5;
    return 'Drivers 25 years old or less renting a Class 4 or 5 vehicle during high season will be charged 50% more.';
  }

  if (recentAccidents && driverAge < 30) {
    rentalPrice += 15;
  }

  return Math.min(rentalPrice, MAXIMUM_RENTAL_PRICE);
}