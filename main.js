var BMI = /** @class */ (function () {
    function BMI(weight, height) {
        this.weight = weight;
        this.height = height;
        this.calculateBMI();
    }
    BMI.prototype.calculateBMI = function () {
        // BMI formula: weight (kg) / (height (m) * height (m))
        this.bmi = this.weight / (Math.pow((this.height / 100), 2));
    };
    BMI.prototype.getCategory = function () {
        if (this.bmi < 18.5) {
            return "Underweight";
        }
        else if (this.bmi < 24.9) {
            return "Normal weight";
        }
        else if (this.bmi < 29.9) {
            return "Overweight";
        }
        else {
            return "Obese";
        }
    };
    BMI.prototype.getBMI = function () {
        return this.bmi;
    };
    return BMI;
}());
// Example usage
var weight = 70; // in kg
var height = 170; // in cm
var bmiCalculator = new BMI(weight, height);
console.log("BMI:", bmiCalculator.getBMI());
console.log("Category:", bmiCalculator.getCategory());
