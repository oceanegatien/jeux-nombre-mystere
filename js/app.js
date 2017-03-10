var solution = Math.random() * (3 - 0) + 0;
var arrondis = Math.round(solution);


var response = prompt("Ecrivez un chiffre entre 0 et 3");

if (response < arrondis){
	console.log("trop petit!");
}else{
	console.log("trop grand!");
}


if (response == arrondis){
	console.log("Bravo! C'est gagné!");
} 
else{
	var response = prompt("Essayez encore !");
}





