const userName = "Manuel";

let age = 30;

age = 29;

// const add = (a: number, b: number = 1) => a + b;

const printOutput = (output: string | number) => console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

// printOutput(add(5));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  firstName: "Manuel",
  age: 20,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobbies1, hobbies2, ...remainingHobbies] = hobbies;
console.log({ hobbies, hobbies1, hobbies2, remainingHobbies });

const { firstName, age: personAge } = person;
