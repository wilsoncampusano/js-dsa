function isEven(num){
	var even = num % 2 == 0 ;
	var msg =  even ? "all are even" : "not all are even";
	console.log(msg);
}


var nums = [1,2,4,6,8,9];

nums.every(isEven);


