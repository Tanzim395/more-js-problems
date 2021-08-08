// sum of two number
// function add(num2, num2) {
//     const sum = num1 + num2;
//     return sum;
// }

// const firstTotal = add(63, 67);
// console.log(firstTotal);
// const secondTotal = add(54, 981);
// console.log(secondTotal);


//multiply function
// function multiply(num1, num2) {
//     const result = num1 * num2;
//     return result;
// }

// const firstResult = multiply(13, 12);
// console.log(firstResult);

/*
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/


//This part is from add-Multiply script
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    // adding all wood quantity
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const firstOption = woodCalculator(1, 2, 3);
console.log(firstOption);