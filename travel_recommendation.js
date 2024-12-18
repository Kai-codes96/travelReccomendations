//clears input text for search bar
function clear() {
    document.getElementById("search").value= "";
}

function searchCondition() {
    const searchField = document.getElementById("search");
    fetch('./travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        switch (document.getElementById("search").value.toLowerCase()) {
            case "beach":
                console.log(data.beaches)
                break;
            case "beaches":
                console.log(data.beaches)
                break;
            case "temple":
                console.log(data.temples)
                break;
            case "temples":
                console.log(data.temples)
            case "countries":
                console.log(data.countries)
                break;
            case "country":
                console.log(data.countries)
                break;
            default:
                alert("Try looking for beaches,countries,or temples");

        }
    })
}

searchBtn.addEventListener('click', searchCondition);