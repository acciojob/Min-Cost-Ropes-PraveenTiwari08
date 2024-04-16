const PriorityQueue = require('priorityqueuejs');

function minCost(arr) {
    let pq = new PriorityQueue(function(a, b) { return b - a });
    for (let length of arr) {
        pq.enq(length);
    }
    let totalCost = 0;
    while (pq.size() > 1) {
        let cost = pq.deq() + pq.deq();
        totalCost += cost;
        pq.enq(cost);
    }
    return totalCost;
}

module.exports = minCost;