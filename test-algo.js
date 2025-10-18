var canCompleteCircuit = function (gas, cost) {
    const n = gas.length;

    for (let start = 0; start < n; start++) {
        let tank = 0;
        let failed = false;

        // mico optimization
        if (gas[start] == 0 || (cost[start] >= gas[start]) && start != n - 1) {
            continue;
        }
        for (let station = start; station != ((n + start - 1) % n); station = (station + 1) % n) {
            tank += gas[station] - cost[station];
            if (tank < 0) {
                failed = true;
                break;
            }
        }

        if (failed) continue;

        const lastStation = (n + start - 1) % n;
        tank += gas[lastStation] - cost[lastStation];
        if (tank >= 0) return start;
    }

    return -1;
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