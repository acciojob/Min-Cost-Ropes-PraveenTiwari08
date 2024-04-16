function mincost(arr)
{ 
//write your code here
// return the min cost
	 priority_queue = make_priority_queue(arr)
    totalCost = 0
    while size(priority_queue) > 1:
        cost = pop(priority_queue) + pop(priority_queue)
        totalCost += cost
        push(priority_queue, cost)
    return totalCost
  
}

module.exports=mincost;
