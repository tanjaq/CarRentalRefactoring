// age - age of driver
// licence - number of full years person holds driving licence
// tier - class of the car from 1 (smallest) to 5 (largest) that person wishes to rent
// accidentCause - has s/he caused any accidentCauseidents within last year
// season - if it is high season or not
function price(age, licence, tier, accidentCause, season) {

    if (age < 18){
      return "Driver too young - cannot quote the price";
    }
    else{
      if (age <= 21 && tier >= 2){
        return "Drivers 21 y/o or less can only rent Class 1 vehicles";
    }
    var rentalprice = age;
    if (tier >= 4 && age <= 25 && season !== false){
      rentalprice = rentalprice + rentalprice/2;
    }
    if (licence < 1){
        return "Driver must hold driving licence at least for one year. Can not rent a car!";
    }else{
      if (licence < 3){
      rentalprice = rentalprice + rentalprice/100*30;
    }}
    if (accidentCause == true && age < 30){
      rentalprice = rentalprice + 15;
    }
    if (rentalprice > 1000){
      return 1000.0;
    }
    return rentalprice;
    }
}
exports.price = price;