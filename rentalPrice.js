function canRent(age, licence, rentalClass){
  if (age < 18)
  {
    return "Driver too young - cannot quote the price";
  }

  if (age <= 21 && rentalClass >= 2)
  {
      return "Drivers 21 y/o or less can only rent Class 1 vehicles";
  }

  if (licence < 1)
  {
      return "Driver must hold driving licence at least for one year. Can not rent a car!";
  }

  return null;

}

function calculatePrice(rentalPrice, licence, age, highSeason, causedAccidents){

  var rentalPrice = age;
  if (rentalClass >= 4 && age <= 25 && highSeason === true)
  {
    rentalPrice *= 1.5;
  }
  if (licence < 3)
  {
    rentalPrice *= 1.3;
  }
  if (causedAccidents == true && age < 30)
  {
    rentalPrice += 15;
  }
  if (rentalPrice > 1000)
  {
    return 1000.0;
  }
  return rentalPrice;

}

function price(age, licence, rentalClass, causedAccidents, highSeason) {

    const message = canRent(age, licence, rentalClass);
    if(message){
      return message
    }

    return calculatePrice(rentalPrice, licence, age, highSeason, causedAccidents);

}
exports.price = price;
