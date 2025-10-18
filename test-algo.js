/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    const n = gas.length;
    let index = 0, totalCost = 0, totalGas = 0, total = 0;

    for (let i = 0; i < n; i++) {
        total += gas[i] - cost[i];
        totalCost += cost[i];
        totalGas += gas[i];

        if (total < 0) {
            total = 0;
            index = i + 1;
        }
    }

    return totalCost > totalGas ? -1 : index;
};

// outputs : 3
console.log(
    canCompleteCircuit(
        [1, 2, 3, 4, 5],
        [3, 4, 5, 1, 2]
    )
);
console.log(
    canCompleteCircuit(
        [3, 3, 4],
        [3, 4, 4]
    )
);
console.log(
    canCompleteCircuit(
        [1, 1, 3],
        [2, 2, 1]
    )
);
console.log(
    canCompleteCircuit(
        [4, 5, 3, 1, 4],
        [5, 4, 3, 4, 2]
    )
); 