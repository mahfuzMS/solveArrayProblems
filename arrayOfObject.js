const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

//***---  MAP  ---***

//1. Get array of all names
const names = characters.map((e) => {
  return e.name;
});
// console.log(names);

//2. Get array of all heights
const height = characters.map((e) => {
  return e.height;
});
// console.log(height);

//3. Get array of objects with just name and height properties
const ArrayOfObject = characters.map((e) => {
  if (e.name && e.height) {
    return { name: e.name, height: e.height };
  }
});
// console.log(ArrayOfObject);

//4. Get array of all first names
const fName = characters.map((e) => {
  let fullName = e.name.split(" ");
  let firstName = fullName[0];
  return firstName;
});
// console.log(fName);

//***---  REDUCE  ---***

//1. Get the total mass of all characters
const totalMass = characters.reduce((acc, e) => {
  return (acc += Number(e.mass));
}, 0);
// console.log(totalMass);

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, e) => {
  return acc + Number(e.height);
}, 0);
// console.log(totalHeight);

//3. Get total number of characters by eye color
const NumOfChar = characters.reduce((acc, e) => {
  if (acc[e.eye_color])
    acc[e.eye_color]++;
  else
    acc[e.eye_color] = 1;
  return acc;
  
},  {});
// console.log(NumOfChar);

//4. Get total number of characters in all the character names (without spaceses)
const totalName = characters.reduce((acc, e) => {
  let fullName = e.name.split(" ").join("");
  // console.log(fullName);
  return acc + fullName.length;
}, 0);
// console.log(totalName);



//***FILTER***
//1. Get characters with mass greater than 100
const mass = characters.filter((e) => {
  return e.mass > 100;
});
// console.log(mass);

//2. Get characters with height less than 200
const heights = characters.filter((h) => {
  return h.height < 200;
})
// console.log(heights);

//3. Get all male characters
const males = characters.filter((m) => {
  return m.gender == 'male';
})
// console.log(males);

//4. Get all female characters
const Fmales = characters.filter((m) => {
  return m.gender == 'female';
})
// console.log(Fmales);


//***SORT***
//1. Sort by mass
const sortByMass = characters.sort((a, b) => {
  return a.mass - b.mass;
})
// console.log(sortByMass);

//2. Sort by height
const sortByHeight = characters.sort((a, b) => {
  return a.height - b.height;
})
// console.log(sortByHeight);

//3. Sort by name
const sortByName = characters.sort((a, b) => {
  return a.name.localeCompare(b.name);
})
// console.log(sortByName);

//4. Sort by gender
const sortByGender = characters.sort((a, b) => {
  return a.gender.localeCompare(b.gender);
}) 
// console.log(sortByGender);

//***EVERY***
//1. Does every character have blue eyes?
const blueEyes = characters.every((e) => {
  return e.eye_color == 'blue';
})
// console.log(blueEyes);

//2. Does every character have mass more than 40?
const massMoreThan40 = characters.every((e) => {
  return e.mass > 40;
})
// console.log(massMoreThan40);

//3. Is every character shorter than 200?
const shorterThan200 = characters.every((e) => {
  return e.height < 200;
})
// console.log(shorterThan200);

//4. Is every character male?
const male = characters.every((e) => {  
  return e.gender == 'male';  
})
// console.log(male);

//***SOME***
//1. Is there at least one male character?
const maleChar = characters.some((e) => {
  return e.gender == 'male';
})
// console.log(maleChar);

//2. Is there at least one character with blue eyes?  
const blueEyesChar = characters.some((e) => {
  return e.eye_color == 'blue';
})
// console.log(blueEyesChar);

//3. Is there at least one character taller than 210?
const tallChar = characters.some((e) => {
  return e.height > 210;
})
// console.log(tallChar);

//4. Is there at least one character that has mass less than 50?
const massChar = characters.some((e) => {
  return e.mass < 50;
})
// console.log(massChar);









