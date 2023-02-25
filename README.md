# Refactoring - car rental company price calculator

The task is to refactor the program code so that it meets clean code standards and follows all business requirements.

# How to get the project

To solve the task, proceed as follows:
1. Fork this repository on to your account
2. Clone the forked repo to your computer using `git clone URL`
3. Make all necessary changes and commit
4. Make a pull request for the original repo on GitHub
5. Grade (1p) is awarded to students who:
   - who made the pull request with proper code

# Business requirements

**Background**

Rental cars are divided into classes 1-5, where 1 is the cheapest category and 5 is the most expensive.

**Business rules for calculating the price of a car rental for one day**

People under the age of 18 cannot rent a car
18-21 year olds can only rent class 1 cars

The maximum rental price is 1000 euros per day.

The minimum rental price is equal to the age of the driver.

In classes 4 and 5, the price is 50% more expensive if the driver is 25 years old or younger (except in low season).

Persons who have held their driver's license for less than a year cannot rent. If the driver's license has been held for less than three years, the rental price is 30% higher.

If the person has caused traffic accidents in the last year and the person is under 30 years old, 15 euros will be added to the daily rental price.
