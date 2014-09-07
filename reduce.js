function add(currentTotal, currentValue){
	return currentTotal + currentValue;
}


var nums = [1,2,3,4,5];
var sum = nums.reduce(add);
console.log(sum);
