console.log(esPrimo(13));
function esPrimo(n){
	for(var i = 2; i < n; i++){
		if(n % i == 0){
			return false;
		}
		return true;
	}
}