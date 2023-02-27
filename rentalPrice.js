// driverAge - age of driver
// licenceAge - number of full years person holds driving licence
// carClass - class of the car from 1 (smallest) to 5 (largest) that person wishes to rent
// causedAccident - has s/he caused any accidents within last year
// sufferedAccident - has s/he participated (but not caused) in any accidents within last year
// isHighSeason - if it is high season or not
function price(driverAge, licenceAge, carClass, causedAccident, sufferedAccident, isHighSeason) {

    if (driverAge < 18)
    {
      return "Driver too young - cannot quote the price";
    }
    if (driverAge <= 21 && carClass > 2)
    {
        return "Drivers 21 y/o or less can only rent Class 1 vehicles";
    }
    var rentalprice = driverAge;
    if (carClass >= 4 && driverAge <= 25 && isHighSeason === true)
    {
      rentalprice = rentalprice * 2;
    }
    if (licenceAge < 1)
    {
        return "Driver must hold driving licence at least for one year. Can not rent a car!";
    }
    if (licenceAge < 3)
    {
      rentalprice = rentalprice * 1.3;
    }
    if (causedAccident == true && driverAge < 30)
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
