let marksWeight = 78;
let marksHeight = 1.69;
let johnsWeight = 95;
let johnsHeight = 1.76;
let marksBMI = marksWeight / marksHeight ** 2;
let johnsBMI = johnsWeight / johnsHeight ** 2;
const markHeigherBMI = (marksBMI > johnsBMI);
console.log(markHeigherBMI);
if (markHeighterBMI) {
    console.log(`Mark's BMI(${marksBMI}) is heighter than John's(${johnsBMI})`);
} else {
    console.log(`John's BMI(${johnsBMI}) is heighter than Mark's(${marksBMI})`)
}
