const array2 = [1,3,5,7];

// const removeFromArray = function(array, argRemoved) {
//     let indexForRemove = array.indexOf(argRemoved);
//     let firstPart = array.slice(0,(indexForRemove));
//     let secondPart = array.slice((indexForRemove + 1));
//     return firstPart.concat(secondPart);
// };

// works for single number argument to remove. how to scale to any number of args?

/* const removeFromArray = function(array, ...argRemoved) {
    argRemoved.forEach((arg) => {
        let indexForRemove = array.indexOf(arg);
        if (indexForRemove > -1) {
        let firstPart = array.slice(0,(indexForRemove));
        let secondPart = array.slice((indexForRemove + 1));
        let removedArray = firstPart.concat(secondPart);
        return removedArray;
    }
        else {
            return;}
    
    });
} 
*/
// returns undefined instead of the new array. probably due to the if statement

// const removeFromArray = function(array, ...argRemoved) {
//     for (arg in argRemoved) {
//         let indexForRemove = array.indexOf(arg);
//         array = array.splice((indexForRemove), 1);
//     }
//     return array;
// }

//Kind of works!!! Can accept 2 arguments but no more than that...

const array3 = [1,2,3,4,5,6];

// const removeFromArray = function(array, ...argRemoved) {
//     for (arg in argRemoved) {
//     let arrayFiltered = array.filter((arg) => {
//         if (array.includes(arg) === true) {
//         return false;
//         }
//         else {return true;}
//             });
//         array = arrayFiltered;
//         }
//         return array;
// }

// > array2Filtered = array2.filter((element) => element != 3);
// [ 1, 5, 7 ]

// const removeFromArray = function(array, arg) {
//     array = array.filter((element) => element != arg)
//     return array;
//     removeFromArray(array2, 3) // [1 , 5, 7]

//FINAL SOLUTION:

const removeFromArray = function(array, ...argRemoved) {
    for (let i = 0; i <= argRemoved.length; i++) {
    array = array.filter((element) =>  element !== argRemoved[i]);
    }
    return array;
}

// Could not get for...in loop to properly work with filter function. Turned for...in loop into a for(;;) loop instead and it works fine.

// Do not edit below this line
module.exports = removeFromArray;
