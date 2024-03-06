//no.1 Extracting last four characters of string"
let stringA = " extravaganza ";
let stringExtract = stringA .substring(8 , 12);
console.log({stringExtract});

//no.2 Inserting the string "eat" at the fourth index of the varible 
let food = "The quick fox jumped over the lazy dog";
let stringToBeAdded = "eat";
let indexPosition = 4;
let newFood = food.slice(0, indexPosition) + stringToBeAdded + food.slice(indexPosition);
console.log({newFood});

//no.3 count how many times the strings  "the" and "brown" appear in the string variables.
let story = "The quick brown fox jumps over the lazy dog";
console.log((story.match('the')).length);
console.log((story.match('brown')).length);

// no.4 find the words 'are' and 'sitting' in the string below.
let string1 = "The pupils are reading in the library";
let stringToFind = "are";
let indexOfAre = string1 .indexOf(stringToFind);
console.log({indexOfAre});

let string2 = "The child was sitting on the table before it fell";
let stringFind = "sitting";
let indexOfSitting = string2 .indexOf(stringFind);
console.log({indexOfSitting});

//no.5 converting the strings to specified format
let word1 = "wonderful";
let upperCase = word1 .toUpperCase();
console.log(upperCase);

let word2 = "amazing";
let lowerCase1 = word2 .toLowerCase();
console.log(lowerCase1);

let word3 = "UndERneath";
let lowerCase2 = word3 .toLowerCase();
console.log(lowerCase2);

function titleCase(str){
    str = str .toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++){
        str[i] = str[i] .charAt(0) .toUpperCase() + str[i] .slice(1);
    }
    return str .join(' ');
}
console.log(titleCase('A wonderful world'))







