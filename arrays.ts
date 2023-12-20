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
function addPower(p: number, ...numsToAdd: number[]): number{
  let answer = 0; 
  for(let i = 0; i < numsToAdd.length; i++){
    answer += numsToAdd[i] ** p;
  }
  return answer;
}
addPower('a string', 4, 5, 6);


// *************** Spread Syntax ***************** //
function performDanceMove(moveName:string, moveReps:number, hasFlair:boolean):void{
  console.log(`I do the ${moveName} ${moveReps} times !`);
  if(hasFlair){
    console.log('I do it with flair!');
  }
}

let danceMoves: [string, number, boolean][] = [
  ['chicken beak', 4, false],
  ['wing flap', 4, false],
  ['tail feather shake', 4, false],
  ['clap', 4, false],
  ['chicken beak', 4, true],
  ['wing flap', 4, true],
  ['tail feather shake', 4, true],
  ['clap', 4, true],
];

danceMoves.forEach(move => performDanceMove(...move));


