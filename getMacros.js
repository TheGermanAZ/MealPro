const axios = require("axios");

const getMacros = userStats => {

    const fitnessGoal = userStats.fitnessGoal;
    const gender = userStats.gender;
    const weight = userStats.weight;
    const height = userStats.height;
    const activityLevel = userStats.fitnessGoal;
    const age = userStats.age;
    const bodyType = userStats.bodyType;

    // calculate Basal Metabolic Rate (BMR)
    let BMR;
    if (gender == 0) {
        // male calc
        BMR = 66 + (6.3 * weight) + (12.9 * height) - (6.8 * age);
    } else {
        BMR = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age);
    }

    // calculate Total Daily Energy Expenditure -> suggested calories
    let TDEE; 
    if (activityLevel == 0) { // little to no exercise
        TDEE = 1.2 * BMR;
    } else if (activityLevel == 1) { // light exercise 1-3 times / week
        TDEE = 1.375 * BMR;
    } else if (activityLevel == 2) { // moderate exercise 3-5 times / week
        TDEE = 1.55 * BMR;
    } else { // hard exercise 6-7 times / week
        TDEE = 1.725 * BMR;
    }

    // find the new number based on fitness goal
    let fitnessMult;
    if (fitnessGoal == 0) { // lose weight
        fitnessMult = 0.9;
    } else if (fitnessGoal == 1) { // maintain weight
        fitnessMult = 1;
    } else { // gain weight -> 10% caloric surplus
        fitnessMult = 1.1;
    }

    TDEE = fitnessMult * TDEE;
    TDEE = Math.round(TDEE);

    // calculate macro percents
    let macros = {
        "protein": 0,
        "carbs": 0,
        "fat": 0
    };
    if (bodyType == 0) {
        macros.carbs = 25;
        macros.protein = 40;
        macros.fat = 35;
    } else if (bodyType == 1) {
        macros.carbs = 35;
        macros.protein = 35;
        macros.fat = 30;
    } else {
        macros.carbs = 40;
        macros.protein = 30;
        macros.fat = 30;
    }

    const protein = Math.round(TDEE * (macros.protein / 100));
    const carbs = Math.round(TDEE * (macros.carbs / 100));
    const fat = Math.round(TDEE * (macros.fat / 100));

    const gramsProtein = Math.round(protein / 4); // 4 cal / g
    const gramsCarbs = Math.round(carbs / 4); // 4 cal / g
    const gramsFat = Math.round(fat / 9); // 9 cal/g

    const result = {
        "calories": TDEE,
        "protein": gramsProtein,
        "carbs": gramsCarbs,
        "fat": gramsFat
    }

    return result;

}


const userStats = {
    "fitnessGoal": 2,
    "gender": 0,
    "weight": 150,
    "height": 68,
    "activityLevel": 2,
    "age": 19,
    "bodyType": 1
}

const result = getMacros(userStats);
