// driverAge - The driverAge of the driver.return
// licenceRetention - The number of full years the person has held a driving licenceRetention.
// carClass - The class of the car from 1 (smallest) to 5 (largest) that person wishes to rent.
// hasAccident - has s/he caused any accidents within last year
// hasParticipatedInAccident - Whether the driver has participated (but not caused) in any accidents within the last year.
// isHighSeason - Whether it is high isHighSeason or not.
function price(driverAge, licenceRetention, carClass, hasAccident, hasParticipatedInAccident, isHighSeason) {
  
  let rentalprice = driverAge;

    if (driverAge < 18)
    {
      return "Driver too young - cannot quote the price";
    }

    if (driverAge <= 21 && carClass > 2)
    {
        return "Drivers 21 y/o or less can only rent Class 1 vehicles";
    }

    if (carClass>= 4 && driverAge <= 25 && isHighSeason !== false)
    {
      rentalprice = rentalprice * 2;
    }

    if (licenceRetention < 1)
    {
        return "Driver must hold driving licenceRetention at least for one year. Can not rent a car!";
    }

    if (licenceRetention < 3)
    {
      rentalprice = rentalprice * 1.3;
    }

    if (hasAccident == true && carClass < 30)
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
