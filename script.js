function mincost(arr) {
  // Initialize the priority queue (min-heap)
  let minHeap = new MinHeap();
  
  // Insert all rope lengths into the min-heap
  for (let rope of arr) {
    minHeap.insert(rope);
  }

  let totalCost = 0;

  // Merge ropes until only one rope remains
  while (minHeap.size() > 1) {
    // Extract the two smallest ropes
    let min1 = minHeap.extractMin();
    let min2 = minHeap.extractMin();
    
    // Calculate the cost of merging
    let cost = min1 + min2;
    totalCost += cost;

    // Insert the merged rope back into the min-heap
    minHeap.insert(cost);
  }

  return totalCost;
}

// Priority queue implementation (MinHeap)
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] < this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMin() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.shift();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;

    if (left < this.size() && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.size() && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.sinkDown(smallest);
    }
  }
}

// Function to handle button click and calculate minimum cost
function calculateMinCost() {
  const ropeLengthsInput = document.getElementById("ropeLengths").value;
  const ropeLengthsArray = ropeLengthsInput.split(",").map(Number);
  const resultElement = document.getElementById("result");

  if (ropeLengthsArray.length === 0 || ropeLengthsArray.some(isNaN)) {
    resultElement.innerText = "Please enter valid rope lengths.";
    return;
  }

  const minCost = mincost(ropeLengthsArray);
  resultElement.innerText = `Minimum cost to connect all ropes: ${minCost}`;
}
