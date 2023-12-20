// *************** INTRO ***************** //

let customersArray = [
  "Custy Stomer",
  "C. Oostomar",
  "C.U.S. Tomer",
  3432434,
  "Custo Mer",
  "Custopher Ustomer",
  3432435,
  "Kasti Yastimeur",
];

//Write Your Code here:
function checkCustomersArray() {
  for (let i = 0; i < customersArray.length; i++) {
    if (typeof customersArray[i] != "string") {
      console.log(`Type error: ${customersArray[i]} should be a string!`);
    }
  }
}

checkCustomersArray();

function stringPush(val) {
  if (typeof val === "string") {
    customersArray.push(val);
  }
}

stringPush();


// *************** Array Type Annotations ***************** //
// Arrays:
let bestNumbers: number[] = [7,77,4];
let bestLunches: string[]= ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: string[]= ['scrambled eggs', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans: boolean[] = [true, false];


// *************** Multi-dimensional Arrays ***************** //
// Arrays:
let bestNumbers: number[] = [7,77,4];
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: string[]= ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans: boolean[] = [true, false];

// Multidimensional Arrays:
let bestMealPlan: string[][] = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti: number[][][] = [ [[1],[2,3]], [[7],bestNumbers] ];


// *************** Tuples ***************** //
let favoriteCoordinates: [number,number,string,number,number,string] = [40, 43.2, 'N', 73, 59.8, 'W'];
favoriteCoordinates = [17, 45, 'N', 142, 30, 'E'];
// favoriteCoordinates[6] = -6.825;


// *************** Rest Parameters ***************** //

