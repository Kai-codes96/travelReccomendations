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

fetch ('travel_recommendation_api.json').then(response => response.json()).then(data => {
    const showPlaces= document.getElementById("showPlaces");
    const searchField= document.getElementById("search").value.toLowerCase();
})