const finalValueAfterOperations = function (operations) {
    let x = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] == "--X" || operations[i] == "X--")
            x = x - 1;
        else if (operations[i] == "++X" || operations[i] == "X++")
            x = x + 1;
    }
    return x;
}
console.log(finalValueAfterOperations(["++X", "++X", "X++"]));