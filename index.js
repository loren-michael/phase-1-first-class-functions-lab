const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers) {
    const firstTwoDrivers = drivers.slice(0, 2);
    return firstTwoDrivers;
}

function returnLastTwoDrivers(drivers) {
    const lastTwoDrivers = drivers.slice(2, );
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const fare = 5;

function createFareMultiplier(multiplier) {
    return function () {
        return (fare * multiplier)
    }
}

function fareDoubler(fare) {
    return (fare * 2);
}

function fareTripler(fare) {
    return (fare * 3);
}

function selectDifferentDrivers(arrayOfDrivers,returnLastTwoDrivers){
    return returnLastTwoDrivers(arrayOfDrivers);    
}