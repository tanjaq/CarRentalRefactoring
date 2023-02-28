// Better version of object orienting programming
//const { price } = require('./index.js');
const result = rental.price({
  age: Number(post.age),
  licence: Number(post.licence),
  clazz: Number(post.clazz),
  acc: parseBool(post.acc),
  acc2: parseBool(post.acc2),
  season: parseBool(post.season)
});


/* 
const result = price({
  age: 25,
  licence: 2,
  clazz: 4,
  acc: false,
  acc2: false,
  season: true
});
  */
  
  /* const result = rental.price({
    age: 25,
    licence: 2,
    clazz: 4,
    acc: false,
    acc2: false,
    season: true
  });  */
  
  function price(age, licence, clazz, acc, acc2, season) {
    let message="";
    if (age < 18) {
      message =  "Driver too young - cannot quote the price";
    }
    
    if (age <= 21 && clazz > 2) {
      message =  "Drivers 21 y/o or less can only rent Class 1 vehicles";
    }
    
    if (licence < 1) {
      message =  "Driver must hold driving licence at least for one year. Can not rent a car!";
    }
    
    /* 
    *  initializes the rentalprice variable with the age parameter 
    *  This is the starting point for calculating the rental price based on the driver's age.
    *  The minimum rental price is equal to the age of the driver.
    */ 
    var rentalprice = age;
    
    // Licence Discount via  rentalprice = age + licence
    rentalprice = applyLicenceDiscount(rentalprice, licence);

    // Accident Charge via starting point, accident true or false, and actual age 
    rentalprice = applyAccidentSurcharge(rentalprice, acc, age);

    // Seosonal Charge starting point, clazz of car, age + season
    rentalprice = applySeasonalSurcharge(rentalprice, clazz, age, season);
    
    rentalprice = capRentalPrice(rentalprice);
    
    return {message, rentalprice};
  }
  
  function applyLicenceDiscount(rentalprice, licence) {
    if (licence < 3) {
      rentalprice *= 1.3;
    }
    return rentalprice;
  }
  
  function applyAccidentSurcharge(rentalprice, hasAccident, age) {
    if (hasAccident && age < 30) {
      rentalprice += 15;
    }
    return rentalprice;
  }
  
  function applySeasonalSurcharge(rentalprice, clazz, age, season) {
    if (clazz >= 4 && age <= 25 && season) {
      rentalprice *= 2;
    }
    return rentalprice;
  }
  
  function capRentalPrice(rentalprice) {
    if (rentalprice > 1000) {
      return 1000;
    }
    return rentalprice;
  }

  

  exports.price = price;

    
  
  //exports.price = price;
  //Console.log()
 