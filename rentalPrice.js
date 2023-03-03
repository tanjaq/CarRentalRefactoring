// age - age of driver
// expirienceOfDriving - number of full years person has been driving
// clazz - class of the car from 1 (smallest) to 5 (largest) that person wishes to rent
// hadAccidents - has s/he caused any accidents within last year
// hadIncludedInAccidents - has s/he participated (but not caused) in any accidents within last year
// season - if it is high season or not
function price(age, expirienceOfDriving, clazz, hadAccidents, hadIncludedInAccidents, season) {

    var rentalprice = age;
    
    if (age < 18)
    {
      return "Driver too young - cannot quote the price";
    }
    if (age <= 21 && clazz > 2)
    {
        return "Drivers 21 y/o or less can only rent Class 1 vehicles";
    }
    if (clazz >= 4 && age <= 25 && season !== false)
    {
      rentalprice = rentalprice * 2;
    }
    if (expirienceOfDriving < 1)
    {
        return "Driver must hold driving licence at least for one year. Can not rent a car!";
    }
    if (expirienceOfDriving < 3)
    {
      rentalprice = rentalprice * 1.3;
    }
    if (hadAccidents == true && age < 30)
    {
      rentalprice = rentalprice + 15;
    }
    if (rentalprice > 1000)
    {
      return 1000.0;
    }
    return rentalprice;
}
exports.price = price;
