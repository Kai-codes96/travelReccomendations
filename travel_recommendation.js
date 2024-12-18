//clears input text for search bar
function clear() {
    document.getElementById("search").value= "";
}

function searchCondition() {
    const searchField = document.getElementById("search");
    fetch('./travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        const beachImage= data.beaches[0].imageUrl;
        const beachImage2= data.beaches[1].imageUrl;
        const templeImage= data.temples[0].imageUrl;
        const templeImage2= data.temples[1].imageUrl;
        const countryImage= data.countries[0].cities[0].imageUrl;
        const countryImage2= data.countries[1].cities[0].imageUrl;
        const countryImage3= data.countries[2].cities[0].imageUrl;
        const countryImage4= data.countries[0].cities[1].imageUrl;
        const countryImage5= data.countries[1].cities[1].imageUrl;
        const countryImage6= data.countries[2].cities[1].imageUrl;
        const imageElement= document.getElementById("image");
        const imageElement2= document.getElementById("imageTwo");
        const imageElement3= document.getElementById("imageThree");
        switch (document.getElementById("search").value.toLowerCase()) {
            case "beach":
                imageElement.src= beachImage;
                document.getElementById("placeDescrip").innerHTML=`<h2>${data.beaches[0].name}<br><br>${data.beaches[0].description}</h2>`
                imageElement2.src= beachImage2;
                document.getElementById("placeDescripTwo").innerHTML=`<h2>${data.beaches[1].name}<br><br>${data.beaches[1].description}</h2>`
                imageElement3.src="";
                document.getElementById("placeDescripThree").innerHTML="";
                break;
            case "beaches":
                imageElement.src= beachImage;
                document.getElementById("placeDescrip").innerHTML=`<h2>${data.beaches[0].name}<br><br>${data.beaches[0].description}</h2>`
                imageElement2.src= beachImage2;
                document.getElementById("placeDescripTwo").innerHTML=`<h2>${data.beaches[1].name}<br><br>${data.beaches[1].description}</h2>`
                imageElement3.src="";
                document.getElementById("placeDescripThree").innerHTML="";
                break;
            case "temple":
                imageElement.src= templeImage;
                document.getElementById("placeDescrip").innerHTML=`<h2>${data.temples[0].name}<br><br>${data.temples[0].description}</h2>`
                imageElement2.src= templeImage2;
                document.getElementById("placeDescripTwo").innerHTML=`<h2>${data.temples[1].name}<br><br>${data.temples[1].description}</h2>`
                imageElement3.src="";
                document.getElementById("placeDescripThree").innerHTML="";
                break;
            case "temples":
                imageElement.src= templeImage;
                document.getElementById("placeDescrip").innerHTML=`<h2>${data.temples[0].name}<br><br>${data.temples[0].description}</h2>`
                imageElement2.src= templeImage2;
                document.getElementById("placeDescripTwo").innerHTML=`<h2>${data.temples[1].name}<br><br>${data.temples[1].description}</h2>`
                imageElement3.src="";
                document.getElementById("placeDescripThree").innerHTML="";
                break;
            case "countries":
                imageElement.src= countryImage;
                document.getElementById("placeDescrip").innerHTML=`<h2>${data.countries[0].cities[0].name}<br><br>${data.countries[0].cities[0].description}</h2>`
                imageElement2.src= countryImage2;
                document.getElementById("placeDescripTwo").innerHTML=`<h2>${data.countries[1].cities[0].name}<br><br>${data.countries[1].cities[0].description}</h2>`
                imageElement3.src= countryImage3;
                document.getElementById("placeDescripThree").innerHTML=`<h2>${data.countries[2].cities[0].name}<br><br>${data.countries[2].cities[0].description}</h2>`
                break;
            case "country":
                imageElement.src= countryImage;
                document.getElementById("placeDescrip").innerHTML=`<h2>${data.countries[0].cities[0].name}<br><br>${data.countries[0].cities[0].description}</h2>`
                imageElement2.src= countryImage2;
                document.getElementById("placeDescripTwo").innerHTML=`<h2>${data.countries[1].cities[0].name}<br><br>${data.countries[1].cities[0].description}</h2>`
                imageElement3.src= countryImage3;
                document.getElementById("placeDescripThree").innerHTML=`<h2>${data.countries[2].cities[0].name}<br><br>${data.countries[2].cities[0].description}</h2>`
                break;
            case "australia":
                imageElement.src= countryImage;
                document.getElementById("placeDescrip").innerHTML=`<h2>${data.countries[0].cities[0].name}<br><br>${data.countries[0].cities[0].description}</h2>`
                imageElement2.src= countryImage4;
                document.getElementById("placeDescripTwo").innerHTML=`<h2>${data.countries[0].cities[1].name}<br><br>${data.countries[0].cities[1].description}</h2>`
                imageElement3.src="";
                document.getElementById("placeDescripThree").innerHTML="";
                break;
            case "japan":
                imageElement.src= countryImage2;
                document.getElementById("placeDescrip").innerHTML=`<h2>${data.countries[1].cities[0].name}<br><br>${data.countries[1].cities[0].description}</h2>`
                imageElement2.src= countryImage5;
                document.getElementById("placeDescripTwo").innerHTML=`<h2>${data.countries[1].cities[1].name}<br><br>${data.countries[1].cities[1].description}</h2>`
                imageElement3.src="";
                document.getElementById("placeDescripThree").innerHTML="";
                break;
            case "brazil":
                imageElement.src= countryImage3;
                document.getElementById("placeDescrip").innerHTML=`<h2>${data.countries[2].cities[0].name}<br><br>${data.countries[2].cities[0].description}</h2>`
                imageElement2.src= countryImage6;
                document.getElementById("placeDescripTwo").innerHTML=`<h2>${data.countries[2].cities[1].name}<br><br>${data.countries[2].cities[1].description}</h2>`
                imageElement3.src="";
                document.getElementById("placeDescripThree").innerHTML="";
                break;
            default:
                alert("Try looking for beaches,temples,or countries like Japan or Australia");

        }
    })
}

searchBtn.addEventListener('click', searchCondition);