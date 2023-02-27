function price(driverAge, licenceAge, vehicleClass, accidentsCaused, accidentsParticipated, highSeason) {

    if (driverAge < 18)
    {
      return "Driver too young - cannot quote the price";
    }
    if (driverAge <= 21 && vehicleClass > 2)
    {
        return "Drivers 21 y/o or less can only rent Class 1 vehicles";
    }
    var rentalprice = driverAge;
    if (vehicleClass >= 4 && driverAge <= 25 && highSeason !== false)
    {
      rentalprice = rentalprice * 2;
    }
    if (licenceAge < 1)
    {
        return "Driver must hold driving licenceAge at least for one year. Can not rent a car!";
    }
    if (licenceAge < 3)
    {
      rentalprice = rentalprice * 1.3;
    }
    if (accidentsCaused == true && driverAge < 30)
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
