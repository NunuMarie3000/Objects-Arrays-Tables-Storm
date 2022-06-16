// ## Exercise 1
// * Create a list of People using *Object Literal* notation. 
// * Each 'person' object in the 'people' collection should have the following information:
// First Name
// Last Name
// Age
// Zip Code

// 1. Add the following 4 People to your list:
// ```
// Jimmy Page, 62, 00821

// Rick Nielsen, 57, 61016

// Joe Walsh, 58, 90001

// Lemmy Kilmister, 57, 21120
let page = {
    firstName: 'Jimmy',
    lastName: 'Page',
    age: 62,
    zipCode: '00821'
};

let nielsen = {
    firstName: 'Rick',
    lastName: 'Nielsen',
    age: 57,
    zipCode: 61016
};

let waslh = {
    firstName: 'Joe',
    lastName: 'Walsh',
    age: 58,
    zipCode: 90001
};

let kilmister = {
    firstName: 'Lemmy',
    lastName: 'Kilmister',
    age: 57,
    zipCode: 12210
};
// ```
// 2. Use javascript to create and populate an array of People objects
let people = [];
people.push(page, nielsen, waslh, kilmister);
// 3. Print each person in the console using a template literal
// console.log(`${people[0]}`);
// Example Output:
// ```
// Name: Jimmy Page
// Age: 62
// Zip Code: 00821

// console.log(people[0]);
function printInfo(){
    for(let i=0; i<people.length; i++){
        console.log(
            `Name: ${people[i].firstName} ${people[i].lastName}
Age: ${people[i].age}
Zip Code: ${people[i].zipCode}
`);
    }
}

printInfo();
