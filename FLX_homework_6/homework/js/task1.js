let numberA ,numberB,numberC,district,valueOne,valueTwo;
numberA = +prompt('Input number a');
numberB = +prompt('Input number b');
numberC = +prompt('Input number c');
if(isNaN(numberA)|| isNaN(numberB)||isNaN(numberC) && typeof numberA !== 'number' && typeof numberB !== 'number'
    && typeof numberC !== 'number' ){
    alert('Invalid input data');
}
district = Math.pow(numberB,2)-4*numberA*numberC;
if(district === 0){
    valueOne = (-numberB+Math.sqrt(district)) / (2*numberA);
    alert('x1 = '+valueOne.toFixed(2))
} else if (district > 0) {
    valueOne = (-numberB+Math.sqrt(district)) / (2*numberA);
    valueTwo = (-numberB-Math.sqrt(district)) / (2*numberA);
    alert('x1 = '+valueOne.toFixed(2) +
    '\n x2 = '+valueTwo.toFixed(2) )
} else if (district < 0) {
    alert('no solution')
}