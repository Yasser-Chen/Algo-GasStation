/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    const n = gas.length;
    let start = 0, tank = 0, total = 0;

    for (let i = 0; i < n; i++) {
        const net = gas[i] - cost[i];
        total += net;
        tank += net;

        if (tank < 0) {
            tank = 0;
            start = i + 1;
        }
    }

    return total < 0 ? -1 : start;
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