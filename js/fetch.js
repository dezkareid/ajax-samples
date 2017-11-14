function handleResponse(response) {
	return response.json();
}

function handleError(error) {
	console.error(error);
}

function printCompany(company) {
	console.log(company.name);
	return company;
}

fetch("http://localhost:3001/companies/1")
	.then(handleResponse)
	.then(printCompany)
	.catch(handleError);

function createCompany(company) {
	var headers = new Headers();
	headers.set("Content-Type", "application/json");
	var options = {
		headers : headers,
		method : 'post',
		body : JSON.stringify(company)
	};
	
	fetch("http://localhost:3001/companies/", options)
		.then(console.log)
		.catch(console.error);
}

function updateCompany(company) {
	if (!company.id){
		return;
	}
	var url = "http://localhost:3001/companies/" + company.id;
	var headers = new Headers();
	headers.set("Content-Type", "application/json");
	var options = {
		headers : headers,
		method : 'put',
		body : JSON.stringify(company)
	};
	
	fetch(url, options)
		.then(console.log)
		.catch(console.error);
}

function deleteCompany(resourceId) {
	var options = {
		method : 'delete'
	};
	var url = "http://localhost:3001/companies/" + resourceId
	fetch(url, options)
		.then(console.log)
		.catch(console.error);
}
