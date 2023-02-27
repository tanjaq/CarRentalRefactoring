// age - age of driver
// licence - number of full years person holds driving licence
// clazz - class of the car from 1 (smallest) to 5 (largest) that person wishes to rent
// acc - has s/he caused any accidents within last year
// acc2 - has s/he participated (but not caused) in any accidents within last year
// season - if it is high season or not
function price(age, license, clazz, acc, season) {
	var rentalprice = age;
	if (age < 18) {
		return 'Driver too young - cannot quote the price';
	}

	if (age < 30 && acc) {
		rentalprice += 15;
	}

	switch (license) {
		case license < 1:
			return 'Driver must hold driving license at least for one year. Can not rent a car!';
		case license < 3 && license >= 1:
			rentalprice *= 1.3;
			return 'Since you have driving license for less than 3 years, you will be charged 30% more';
	}

	switch (clazz) {
		case clazz > 1 && age <= 21:
			return 'Drivers 21 y/o or less can only rent Class 1 vehicles';
		case 4:
		case 5:
			if (age <= 25 && season) {
				rentalprice *= 1.5;
				return 'Drivers 25 y/o or less can only rent Class 1 vehicles';
			}
	}

	if (rentalprice > 1000) {
		return 1000.0;
	}

	return rentalprice;
}
exports.price = price;
