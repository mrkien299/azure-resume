window.addEventListener('DOMContentLoaded', (event) =>{
	getVisitCount();
});

const localFunctionURL = 'http://localhost:7071/api/Counter';
const functionApiURL = 'https://getresumekien.azurewebsites.net/api/GetResumeCounter?code=IJIufamrP5WPW0J2EJLSzw7jEbUnbylqs-ESuZg5luavAzFu7s4rIQ==';

const getVisitCount = () => {
	let count = 30;
	fetch(functionApiURL).then(response => {
			return response.json()
	}).then(response =>{
		console.log("Website called function API.");
		count = response.count;
		document.getElementById("Counter").innerText=count;
	}).catch(function(error){
		console.log(error);
	});
	return count;
}
