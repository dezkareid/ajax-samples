/*var config = {
	dataType : "json",
	error : function (xhrObject, statusError, error) {
		console.log(xhrObject, statusError, error);
	},
	method : 'GET',
	success : function (pokemon) {
		console.log(pokemon.name);
	},
	url : "https://pokeapi.co/api/v2/pokemon/1/",
};
window.addEventListener('load', function () {
	//jQuery.ajax(config)
	delete config.dataType;
	delete config.method;
	console.log(config);
	jQuery.getJSON(config);

});
*/

window.addEventListener('load', function () {
	var config = {
		url : "https://pokeapi.co/api/v2/pokemon/1/",
	};
	var always = function () {
		console.log("Finished");	
	};
	var error = function () {
		console.log("Hubo un error");
	};
	var success = function (pokemon) {
		console.log(pokemon.name);
	};
	var deferred = jQuery.getJSON(config);
	deferred.done(success);
	deferred.fail(error);
	deferred.always(always);
	deferred.done(function () {
		console.log("Me voy a ejecutar")
	})
});