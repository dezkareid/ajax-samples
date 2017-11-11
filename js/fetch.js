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