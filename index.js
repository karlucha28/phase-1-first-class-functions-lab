// Code your solution in this file!
const returnFirstTwoDrivers = function(oneArgument){ 
    return oneArgument.slice(0, 2);
}
const returnLastTwoDrivers = function(secondArgument) {
    return secondArgument.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier = function(a) {
    return function(b) {
        return a*b
    }

}

    function selectDifferentDrivers(oneArgument, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(oneArgument);
 }






    //fanction takes in an integer, multiplier
    //returns a anonymous function
    //function tskes parametr fare 
    //multiply fare by multiplier
 const fareDoubler = createFareMultiplier(2) 

 fareDoubler() // to run it

 const fareTripler = createFareMultiplier(3)

 fareTripler() 