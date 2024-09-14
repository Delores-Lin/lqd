/*
const ageJones = 35;
const ageJohn = 28;
console.log(ageJones * 2, ageJohn / 2);
console.log(ageJones +ageJohn);
const firstName = "John";
const lastName = "Doe";
console.log(firstName + " " + lastName);
const job = 'student';
const myslf = `I'm ${firstName} ${lastName} , a ${ageJohn}-year-old ${job}`
console.log(myslf);

const ageSarah = 10;
const isOldEnough = ageSarah >= 18;
if (isOldEnough) {
    console.log("Sarah can start driving license");
} else {
    const yearsLeft = 18 - ageSarah;
    console.log(`Sarah is too young to start driving license.Wait another ${yearsLeft} years.`);
}

let marksWeight = 78;
let marksHeight = 1.69;
let johnsWeight = 95;
let johnsHeight = 1.76;
let marksBMI = marksWeight / marksHeight ** 2;
let johnsBMI = johnsWeight / johnsHeight ** 2;
const markHeigherBMI = marksBMI > johnsBMI;
console.log(markHeigherBMI);
if (markHeigherBMI) {
    console.log(`Mark's BMI(${marksBMI}) is heighter than John's(${johnsBMI})`);
} else {
    console.log(`John's BMI(${johnsBMI}) is heighter than Mark's(${marksBMI})`)
}

if (4) {
    console.log("Height is defined")
}
else {
    console.log("Height is not defined")
}

const dolphinsScoreAverge = (97 + 112 + 101) / 3;
const koalasScoreAverge = (109 + 95 + 123) / 3;
console.log(dolphinsScoreAverge, koalasScoreAverge);
if (dolphinsScoreAverge === koalasScoreAverge) { console.log("Both teams have the same score average") } 
else if (dolphinsScoreAverge < 100 && koalasScoreAverge < 100) { console.log("No team has won the game") }
else if (dolphinsScoreAverge > koalasScoreAverge) { console.log("Dolphins win the game") }
else { console.log("Koalas win the game") };

const day = "i"
if (day === "monday") {
    console.log("Plan course structure.")
    console.log("Go to coding meetup.")
}
else if (day === "tuesday") {
    console.log("Prepare theory videos.")
}
else if (day === "wednesday" || day === "thursday") {
    console.log("Not a valid day. ")
}
else if (day === "friday") { console.log("Review code and start project.") }
else if (day === "saturday" || day === "sunday") { console.log("Go to gym.") }
else { console.log("Not a valid day.") }

switch (day) {
    case "monday":
        console.log("Plan course structure.")
        console.log("Go to coding meetup.")
        break;
    case "tuesday":
        console.log("Prepare theory videos.")
        break;
    case "wednesday":
    case "thursday":
        console.log("Not a valid day. ")
        break;
    case "friday":
        console.log("Review code and start project.")
        break;
    case "saturday":
    case "sunday":
        console.log("Go to gym.")
        break;
    default:
        console.log("Not a valid day.")
        break;
}

const age = 35;
let drink;
const allowance = age >= 18 ? "wine" : "water";
console.log(typeof allowance);
console.log(typeof age);
*/
const bill= 10;
console.log(`The bill was ${bill},the tip was ${50 <= bill <= 300 ? bill * 0.15 : bill * 0.2},and the total value was ${bill + Number(bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2)}`);