/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.set1 = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    let isNew = this.set1.get(val) ? false : true;
    this.set1.set(val, 1);
    return isNew;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    let hasVal = this.set1.get(val) ? true : false;
    if(hasVal) this.set1.delete(val);
    return hasVal;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randomIndex = Math.floor(Math.random() * this.set1.size);
    //I think turning the set into an array increased the time and space complexity
    let key = Array.from(this.set1.keys())[randomIndex];
    return key;

};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

 /**
 * Initialize your data structure here.
 */

 //using objects made it faster 20%
var RandomizedSet = function() {
    this.set1 = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    let isNew = this.set1[val] ? false : true;
    this.set1[val] = 1;
    return isNew;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    let hasVal = this.set1[val] ? true : false;
    if(hasVal) delete this.set1[val];
    return hasVal;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {  
    var keys = Object.keys(this.set1)
    let randomIndex = Math.floor(Math.random() * keys.length);
    // console.log(keys, randomIndex)
    return keys[randomIndex];

};

//38% using both array and hashmap
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.arr = [];
    this.setMap = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    let contains = this.arr.includes(val);
    if(contains) return false;
    this.arr.push(val);
    this.setMap.set(val, this.arr.length - 1);
    // console.log('insert', this.setMap)
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    let contains = this.arr.includes(val);
    if(!contains) return false;
    if(this.setMap.get(val) < this.arr.length - 1){
        let last = this.arr[this.arr.length - 1]
        this.setMap.set(last, this.setMap.get(val));
        this.arr[this.setMap.get(val)] = last;
    }
    this.setMap.delete(val);
    this.arr.pop();
    // console.log('pop', this.setMap)
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randomNum = Math.floor(Math.random() * this.arr.length);
    // console.log('random', this.setMap)
    return this.arr[randomNum]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */