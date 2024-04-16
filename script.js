function mincost(arr) {
    // Import priority queue library or implement one
    const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

    // Create a priority queue
    const pq = new MinPriorityQueue();

    // Insert all ropes into the priority queue
    arr.forEach(rope => pq.enqueue(rope));

    let totalCost = 0;

    // Merge the ropes until there's only one left
    while (pq.size() > 1) {
        // Extract the two smallest ropes
        const rope1 = pq.dequeue().element;
        const rope2 = pq.dequeue().element;

        // Calculate the cost of merging and add it to the total cost
        const cost = rope1 + rope2;
        totalCost += cost;

        // Insert the merged rope back into the priority queue
        pq.enqueue(cost);
    }

    // Return the total minimum cost
    return totalCost;
}

module.exports = mincost;

