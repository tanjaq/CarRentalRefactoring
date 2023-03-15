// age - age of driver
// license - number of full years person holds driving license
// carClass - class of the car from 1 (smallest) to 5 (largest) that person wishes to rent
// causedAccidents - has s/he caused any accidents within last year
// highSeason - if it is high season or not
async function price(age, license, carClass, causedAccidents, highSeason) {
	var rentalPrice = age;
	var message;
	if (age < 18) {
		return { message: 'Driver too young - cannot quote the price' };
	}

	if (age < 30 && causedAccidents) {
		return {
			rentalPrice: (rentalPrice += 15),
		};
	}

	switch (license) {
		case license < 1:
			return {
				message:
					'Driver must hold driving license at least for one year. Can not rent a car!',
			};
		case license < 3 && license >= 1:
			return {
				rentalPrice: (rentalPrice *= 1.3),
				message:
					'Since you have driving license for less than 3 years, you will be charged 30% more',
			};
	}

	switch (carClass) {
		case carClass > 1 && age <= 21:
			return {
				message:
					'Drivers 21 y/o or less can only rent Class 1 vehicles',
			};
		case 4:
		case 5:
			if (age <= 25 && highSeason) {
				return {
					rentalPrice: (rentalPrice *= 1.5),
					message:
						'You will be charged 50% more for this car it being high season and your age being 25 or less',
				};
			}
	}

	if (rentalPrice > 1000) {
		return {
			rentalPrice: 1000.0,
		};
	}

	return {
		rentalPrice: rentalPrice,
		message: message ? message : 'No special conditions apply',
	};
}
exports.price = price;
