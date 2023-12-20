// ************** Type Inferences *************** //
let aged = true;
let realAge = 0;
if (aged) {
  realAge = 4;
}
let dogAge = realAge * 7;
console.log(`${dogAge} years`);


// ************** Type Shapes *************** //
let firstName: string = 'muriel!';
console.log(firstName.toUpperCase());
console.log(firstName.length);


// ************** Variable Type Annotations *************** //
let phoneNumber: string;

if (Math.random() > 0.5) {
  phoneNumber = '+61770102062';
} else {
  phoneNumber = '7167762323';
}


