// age - age of driver
// licence - number of full years person holds driving licence
// clazz - class of the car from 1 (smallest) to 5 (largest) that person wishes to rent
// acc - has s/he caused any accidents within last year
// acc2 - has s/he participated (but not caused) in any accidents within last year
// season - if it is high season or not

function checkOnAgeErrors(ageOfDriver, classOfCar)
{
  if (ageOfDriver < 18)
  {
    return "Driver too young - cannot quote the price";
  }
  if (ageOfDriver <= 21 && classOfCar > 2)
  {
      return "Drivers 21 y/o or less can only rent Class 1 vehicles";
  }

}

function checkOnDoubleRental(rentalprice, ageOfDriver, classOfCar, nowIsSeason)
{
  if (classOfCar >= 4 && ageOfDriver <= 25 && nowIsSeason !== false)
  {
    rentalprice = rentalprice * 2;
  }
  return rentalprice;
}

function licenceHasMoreThanOneYear(yeasrOfDrivingLicence)
{
  if (yeasrOfDrivingLicence < 1)
  {
    return "Driver must hold driving licence at least for one year. Can not rent a car!";
  }
}

function licenceHasMoreThanThreeYears(rentalprice, yeasrOfDrivingLicence)
{
  if (yeasrOfDrivingLicence < 3)
  {
    rentalprice = rentalprice * 1.3;
  }
  
  return rentalprice;
}


function DriverHasntAccidents(rentalprice, hasAccidents, ageOfDriver)
{
  if (hasAccidents == true && ageOfDriver < 30)
  {
    rentalprice = rentalprice + 15;
  }
  return rentalprice;
}


function rentalPriceMoreThanThousand(rentalprice)
{
  if (rentalprice > 1000)
  {
    return 1000.0;
  }
}


//throw
function price(ageOfDriver, yeasrOfDrivingLicence, classOfCar, hasAccidents, nowIsSeason) {
  var rentalprice = ageOfDriver;
  checkOnAgeErrors(ageOfDriver, classOfCar);
  rentalprice = checkOnDoubleRental(rentalprice, ageOfDriver, classOfCar, nowIsSeason);
  licenceHasMoreThanOneYear(yeasrOfDrivingLicence);
  rentalprice = licenceHasMoreThanThreeYears(rentalprice, yeasrOfDrivingLicence);
  rentalprice = DriverHasntAccidents(rentalprice, hasAccidents, ageOfDriver);
  rentalprice = rentalPriceMoreThanThousand(rentalprice);
  return rentalprice;
}
exports.price = price;
