function receivesAFunction(timeOfDay) {
    const hour = 60
    timeOfDay(hour);
    return "It's time!"
}

function returnsANamedFunction() { 
    const functionName = (a, b) => a + b;
    return functionName;
}


function returnsAnAnonymousFunction() {
    return function() {};
} 