// ageOfDriver - age - age of driver
// yeasrOfDrivingLicence - licence - number of full years person holds driving licence
// classOfCar - clazz - class of the car from 1 (smallest) to 5 (largest) that person wishes to rent
// hasAccidents - acc - has s/he caused any accidents within last year
// It should be deleted, but saved for backward compatibility - acc2 - has s/he participated (but not caused) in any accidents within last year
// nowIsSeason - season - if it is high season or not

class PriceCalculator
{
  constructor() { }
  //check varibable on true value
  ageIsIntAndLessThan121()
  {
    if(isNaN(ageOfDriver) || ageOfDriver > 120 || ageOfDriver < 0)
    {
        error = [ 1, 'Age should be a number that less than 120 and more than 0' ];
    }
  }

  licenceIsPositiveNumber()
  {
    if(isNaN(yeasrOfDrivingLicence) || yeasrOfDrivingLicence < 0)
    {
      error = [ 1, 'License should be a positive number' ];
    }
  }
  
  classOfCarIsTrue()
  {
    if(isNaN(classOfCar) || classOfCar < 0 || classOfCar > 5)
    {
      error = [ 1, 'Class of car should be a number from 1 to 5' ];
    }
  }

  hasAccidentsIsBool()
  {
    if(hasAccidents != underfined)
    {
      hasAccidents = true;
    }
    else
    {
      hasAccidents = false;
    }
  }

  isSeasonIsBool()
  {
    if(nowIsSeason != underfined)
    {
      nowIsSeason = true;
    }
    else
    {
      nowIsSeason = false;
    }
  }







  // standart checks
  checkOnAgeErrors()
  {
    
    if (ageOfDriver < 18)
    {
      return "Driver too young - cannot quote the price";
    }
    
    let driverCantRentHisClassOfCar = ageOfDriver <= 21 && classOfCar > 2; 

    if (driverCantRentHisClassOfCar)
    {
        return "Drivers 21 y/o or less can only rent Class 1 vehicles";
    }

  }

  checkOnDoubleRental()
  {
    let MoreExpensveRent = classOfCar >= 4 && ageOfDriver <= 25 && nowIsSeason !== false;
    if (MoreExpensveRent)
    {
      rentalprice = rentalprice * 2;
    }
  }
  licenceHasMoreThanOneYear()
  {
    if (yeasrOfDrivingLicence < 1)
    {
      return "Driver must hold driving licence at least for one year. Can not rent a car!";
    }
  }

  licenceHasMoreThanThreeYears()
  {
    if (yeasrOfDrivingLicence < 3)
    {
      rentalprice = rentalprice * 1.3;
    }
  }


 DriverHasntAccidents()
  {
    let driverHasAccidents = hasAccidents == true && ageOfDriver < 30;
    if (driverHasAccidents)
    {
      rentalprice = rentalprice + 15;
    }
  }


  rentalPriceMoreThanThousand()
  {
    if (rentalprice > 1000)
    {
      rentalprice = 1000;
      //return 1000.0;
    }
  }


  //throw
  price(ageOfDriver, yeasrOfDrivingLicence, classOfCar, hasAccidents, acc2, nowIsSeason) 
  {
    error = [ 0, '' ];
    
    ageOfDriver = ageOfDriver;
    yeasrOfDrivingLicence = yeasrOfDrivingLicence; 
    classOfCar = classOfCar;
    hasAccidents = hasAccidents;
    nowIsSeason = nowIsSeason;

    // true value check
    ageIsIntAndLessThan121();
    licenceIsPositiveNumber();
    classOfCarIsTrue();
    hasAccidentsIsBool();
    isSeasonIsBool();
    
    if(error[0] == 1)
    {
      return error[1];
    }

    rentalprice = ageOfDriver;


    
    checkOnAgeErrors(ageOfDriver, classOfCar);
    if(error[0] == 1)
    {
      return error[1];
    }

    checkOnDoubleRental(rentalprice, ageOfDriver, classOfCar, nowIsSeason);
    licenceHasMoreThanOneYear(yeasrOfDrivingLicence);
    if(error[0] == 1)
    {
      return error[1];
    }

    licenceHasMoreThanThreeYears(rentalprice, yeasrOfDrivingLicence);
    DriverHasntAccidents(rentalprice, hasAccidents, ageOfDriver);
    rentalPriceMoreThanThousand(rentalprice);
    return rentalprice;
  }
}

let price = new PriceCalculator(); // it didnt will work with base index.js
exports.price = price;
