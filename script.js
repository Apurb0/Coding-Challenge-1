const marksMass = 78;
const johnesMass = 92;

const marksHeight = 1.69;
const johnesHeight = 1.95;

const marksBmi = marksMass / marksHeight ** 2;
const johnesBmi = johnesMass / (johnesHeight * johnesHeight);

console.log(marksBmi);
console.log(johnesBmi);

const markHigherBMI = marksBmi > johnesBmi;
console.log(markHigherBMI);
