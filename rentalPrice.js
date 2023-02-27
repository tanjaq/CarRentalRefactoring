// age - age of driver
// licence - number of full years person holds driving licence
// rentalClass - class of the car from 1 (smallest) to 5 (largest) that person wishes to rent
// causedAccidents - has s/he caused any accidents within last year
// participatedAccidents - has s/he participated (but not caused) in any accidents within last year
// highSeason - if it is high season or not
function price(age, licence, rentalClass, causedAccidents, participatedAccidents, highSeason) {

    if (age < 18)
    {
      return "Driver too young - cannot quote the price";
    }
    if (age <= 21 && rentalClass >= 2)
    {
        return "Drivers 21 y/o or less can only rent Class 1 vehicles";
    }
    var rentalPrice = age;
    if (rentalClass >= 4 && age <= 25 && highSeason === true)
    {
      rentalPrice *= 1.5;
    }
    if (licence < 1)
    {
        return "Driver must hold driving licence at least for one year. Can not rent a car!";
    }
    if (licence < 3)
    {
      rentalPrice *= 1.3;
    }
    if (causedAccidents == true && age < 30)
    {
      rentalPrice += 15;
    }
    if(rentalPrice < age){
      return age;
    }
    if (rentalPrice > 1000)
    {
      return 1000.0;
    }
    return rentalPrice;
}
exports.price = price;
