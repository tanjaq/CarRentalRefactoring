// ageOfDriver - age - age of driver
// yeasrOfDrivingLicence - licence - number of full years person holds driving licence
// classOfCar - clazz - class of the car from 1 (smallest) to 5 (largest) that person wishes to rent
// hasAccidents - acc - has s/he caused any accidents within last year
// It should be deleted, but saved for backward compatibility - acc2 - has s/he participated (but not caused) in any accidents within last year
// nowIsSeason - season - if it is high season or not

class PriceCalculator
{
  constructor() { }
  
  //throw
  price(ageOfDriver, yeasrOfDrivingLicence, classOfCar, hasAccidents, acc2, nowIsSeason) 
  {
    this.error = [ 0, '' ];
    
    this.ageOfDriver = ageOfDriver;
    this.yeasrOfDrivingLicence = yeasrOfDrivingLicence; 
    this.classOfCar = classOfCar;
    this.hasAccidents = hasAccidents;
    this.nowIsSeason = nowIsSeason;

    // true value check
    this.ageIsIntAndLessThan121();
    this.licenceIsPositiveNumber();
    this.classOfCarIsTrue();
    this.hasAccidentsIsBool();
    this.isSeasonIsBool();
    
    if(this.error[0] == 1)
    {
      return this.error[1];
    }

    this.rentalprice = ageOfDriver;


    
    this.checkOnAgeErrors();
    if(this.error[0] == 1)
    {
      return this.error[1];
    }

    this.checkOnDoubleRental();
    this.licenceHasMoreThanOneYear();
    if(this.error[0] == 1)
    {
      return this.error[1];
    }

    this.licenceHasMoreThanThreeYears();
    this.DriverHasntAccidents();
    this.rentalPriceMoreThanThousand();
    return this.rentalprice;
  }
  
  //check varibable on true value
  ageIsIntAndLessThan121()
  {
    if(isNaN(this.ageOfDriver) || this.ageOfDriver > 120 || this.ageOfDriver < 0)
    {
        this.error = [ 1, 'Age should be a number that less than 120 and more than 0' ];
    }
  }

  licenceIsPositiveNumber()
  {
    if(isNaN(this.yeasrOfDrivingLicence) || this.yeasrOfDrivingLicence < 0)
    {
      this.error = [ 1, 'License should be a positive number' ];
    }
  }
  
  classOfCarIsTrue()
  {
    if(isNaN(this.classOfCar) || this.classOfCar < 0 || this.classOfCar > 5)
    {
      this.error = [ 1, 'Class of car should be a number from 1 to 5' ];
    }
  }

  hasAccidentsIsBool()
  {
    if(this.hasAccidents != undefined)
    {
      this.hasAccidents = true;
    }
    else
    {
      this.hasAccidents = false;
    }
  }

  isSeasonIsBool()
  {
    if(this.nowIsSeason != this.undefined)
    {
      this.nowIsSeason = true;
    }
    else
    {
      this.nowIsSeason = false;
    }
  }







  // standart checks
  checkOnAgeErrors()
  {
    
    if (this.ageOfDriver < 18)
    {
      return "Driver too young - cannot quote the price";
    }
    
    let driverCantRentHisClassOfCar = this.ageOfDriver <= 21 && this.classOfCar > 2; 

    if (driverCantRentHisClassOfCar)
    {
        return "Drivers 21 y/o or less can only rent Class 1 vehicles";
    }

  }

  checkOnDoubleRental()
  {
    let MoreExpensveRent = this.classOfCar >= 4 && this.ageOfDriver <= 25 && this.nowIsSeason !== false;
    if (MoreExpensveRent)
    {
      this.rentalprice = this.rentalprice * 2;
    }
  }
  licenceHasMoreThanOneYear()
  {
    if (this.yeasrOfDrivingLicence < 1)
    {
      return "Driver must hold driving licence at least for one year. Can not rent a car!";
    }
  }

  licenceHasMoreThanThreeYears()
  {
    if (this.yeasrOfDrivingLicence < 3)
    {
      this.rentalprice = this.rentalprice * 1.3;
    }
  }


 DriverHasntAccidents()
  {
    let driverHasAccidents = this.hasAccidents == true && this.ageOfDriver < 30;
    if (driverHasAccidents)
    {
      this.rentalprice = this.rentalprice + 15;
    }
  }


  rentalPriceMoreThanThousand()
  {
    if (this.rentalprice > 1000)
    {
      this.rentalprice = 1000;
      //return 1000.0;
    }
  }


  
}

let priceCalc = new PriceCalculator(); // it didnt will work with base index.js
exports.priceCalc = priceCalc;
