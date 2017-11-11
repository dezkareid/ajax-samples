var xhr = new XMLHttpRequest();
xhr.open("GET","http://localhost:3001/companies/1");
xhr.onload = function () {
	var company = JSON.parse(this.responseText);
	console.log(company.name);
};
xhr.onerror = function () {
	console.error("Ocurrio un error");
};
xhr.send();