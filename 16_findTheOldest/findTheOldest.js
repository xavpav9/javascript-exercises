const findTheOldest = function(people) {
  return people.slice(1).reduce((oldest, person) => {
    const newAge = (("yearOfDeath" in person) ? person.yearOfDeath : new Date().getFullYear()) - person.yearOfBirth;
    return (newAge > oldest[1]) ? [person, newAge] : oldest;
  }, [people[0], (("yearOfDeath" in people[0]) ? people[0].yearOfDeath : new Date().getFullYear()) - people[0].yearOfBirth] )[0];
};

// Do not edit below this line
module.exports = findTheOldest;
