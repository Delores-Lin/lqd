/*"use strict";
let calcAverage = (firstGame, secondGame, thirdGame) => (firstGame + secondGame + thirdGame) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
let winner;
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas * 2) {
        winner=("Dolphins")
    } else if (avgKoalas > avgDolphins * 2) {
        winner=("Koalas")
    } else {
        winner=("Nobody")
    }
    return winner;
}
checkWinner(scoreDolphins, scoreKoalas)
console.log(`${winner} win (${scoreDolphins} vs. ${scoreKoalas})`);
console.log(winner);

let list = [1, 2, 3, 4, 5];
list = [6, 7, 8];
list[2] = 20;
console.log(list);
const list2 = new Array(1, 2, 3, 4, 5);
list2[1, 2, 3] = 10, 11, 12;
console.log(list2);
*/
let tip;
function calcTip(bill) {
    if (50 <= bill <= 300) {
        tip=bill * 0.15;
    } else {
        tip=bill * 0.2;
    }
    return tip;
}
console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);