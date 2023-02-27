function price(age, timeLicenceOwned, carClass, accidents, inSeason) {

    if (age < 18)
    {
      return "Driver too young - cannot quote the price";
    }
    if (age <= 21 && carClass > 1)
    {
        return "Drivers 21 y/o or less can only rent Class 1 vehicles";
    }
    var rentalPrice = age;
    if (carClass >= 4 && age <= 25 && inSeason === true)
    {
      rentalPrice = rentalPrice * 2;
    }
    if (timeLicenceOwned < 1)
    {
        return "Driver must hold driving licence at least for one year. Can not rent a car!";
    }
    if (timeLicenceOwned < 3)
    {
      rentalPrice = rentalPrice * 1.3;
    }
    if (accidents == true && age < 30)
    {
      rentalPrice = rentalPrice + 15;
    }
    if (rentalPrice > 1000)
    {
      return 1000.0;
    }
    return rentalPrice;
}
exports.price = price;
