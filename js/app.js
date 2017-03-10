function jouer() {

var solution = Math.random() * (3 - 0) + 0;
var arrondis = Math.round(solution);


var response = prompt("But du jeu: écrivez un chiffre entre 0 et 3, et voyons si vous pensez comme la machine! 2 essais maximum! Good luck!");

if (response < arrondis){
	var response = prompt("Trop petit!");
}
else{
	var response = prompt("Trop Grand!");
}
if (response == arrondis){
	alert("Bravo! C'est gagné!");
} 
else{
	alert("Perdu! ");
}
}