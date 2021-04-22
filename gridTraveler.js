const gridTraveler = (m, n, memo={}) => {
    let gridCoor = m + ',' + n
    if(gridCoor in memo) return memo[gridCoor];
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;


    memo[gridCoor] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo)
    return memo[gridCoor]
}

console.log(gridTraveler(0, 1)) // 0
console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(18, 18)) // 2333606220