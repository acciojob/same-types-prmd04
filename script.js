function isSameType(value1, value2) {
  //your js code 
	let a = typeof(value1);
	let b = typeof(value2);

	return a === b;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
