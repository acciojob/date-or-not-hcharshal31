var isDate = function (input) {
  const regex = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2]\d|3[0-1])$/;
	if(input.match(regex)){
		return true;
	} else{
		return false;
	}
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
