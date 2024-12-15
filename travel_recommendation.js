const submitButton= document.getElementById("submit");

function submitForm() {
    alert("Your form has been submitted")
};
//For the form submit button on "contact us" page
document.getElementById('submit').addEventListener('click', submitForm);
//clears input text for search bar
function clear() {
    document.getElementById("search").value= "";
}

fetch ('https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json');.then(response => response.json());