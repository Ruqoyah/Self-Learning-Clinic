function aritGeo(arr){
	if (isArithmetic(arr)){
		return "Arithmetic"
	}
	if(isGeometric(arr)){
		return "Geometric"
	}
}
function isArithmetic(arr){
	var diff = arr[1]-arr[0]
	for (var i = 2; i<arr.length; i++){
		if((arr[i+1] - arr[i]) == diff){
			return true
		}
	}
	return false
}
function isGeometric(arr){
	var div;
	div =(arr[1]/arr[0])
	for (var i = 2; i<arr.length; i++){
		if (arr[i+1] / arr[i] == div){
			return true
		}
	}
	return false
}

arra = [3,9,27,81,243];
console.log(aritGeo(arra));