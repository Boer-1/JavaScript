function abs(x) {
	if (x >= 0) return x;
		else return -x;
}
function factorial(n){
	var product = 1;
	while (n > 1) {
		product *= n;
		n--;
	}
	return product;
}
