var xhr = new XMLHttpRequest();
xhr.open("GET","https://pokeapi.co/api/v2/pokemon/1/");
xhr.onload = function () {
	var pokemon = JSON.parse(this.responseText);
	console.log(pokemon.name);
};
xhr.onerror = function () {
	console.error("Ocurrio un error");
};
xhr.send();