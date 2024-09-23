const mark = {
    firstName: 'Mark',
    lastName: "Miller",
    marksWeight: 78,
    marksHeight: 1.69,
    calcBMI: function () {
        this.marksBMI = this.marksWeight / this.marksHeight ** 2;
        return this.marksBMI;
    }
}
const john = {
    firstName: 'John',
    lastName: "Smith",
    johnsWeight: 92,
    johnsHeight: 1.95,
    calcBMI: function () {
        this.johnsBMI = this.johnsWeight / this.johnsHeight ** 2;
        return this.johnsBMI;
    }
}
console.log(mark.calcBMI(), john.calcBMI());
console.log(mark.marksBMI, john.johnsBMI)
console.log(`${mark.marksBMI > john.johnsBMI ? "Mark" : "John"}'s BMI(${mark.marksBMI > john.johnsBMI ? mark.marksBMI : john.johnsBMI}) is higher than ${mark.marksBMI > john.johnsBMI ? "John" : "Mark"}'s BMI(${mark.marksBMI > john.johnsBMI ? john.johnsBMI : mark.marksBMI})`); 