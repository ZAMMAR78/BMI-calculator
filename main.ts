class BMI {
    weight: number;
    height: number;
    bmi: number;

    constructor(weight: number, height: number) {
        this.weight = weight;
        this.height = height;
        this.calculateBMI();
    }

    calculateBMI() {
        // BMI formula: weight (kg) / (height (m) * height (m))
        this.bmi = this.weight / ((this.height / 100) ** 2);
    }

    getCategory(): string {
        if (this.bmi < 18.5) {
            return "Underweight";
        } else if (this.bmi < 24.9) {
            return "Normal weight";
        } else if (this.bmi < 29.9) {
            return "Overweight";
        } else {
            return "Obese";
        }
    }

    getBMI(): number {
        return this.bmi;
    }
}

// Example usage
const weight = 70; // in kg
const height = 170; // in cm

const bmiCalculator = new BMI(weight, height);
console.log("BMI:", bmiCalculator.getBMI());
console.log("Category:", bmiCalculator.getCategory());
