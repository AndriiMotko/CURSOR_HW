function getStarwarsInfo() {

    const buttonShowPlanets = document.getElementById("showPlanets");
    let planetsTogle = false;

    let pageNumber = 1;
    const maxNumberOfPages = 5;
    const minNumberOfPages = 1;
    const prevButon = document.getElementById("previous");
    const nextButon = document.getElementById("next");

    async function getJSONResponse(url) {
        return fetch(url).then(data => {
    
        if (data.status !== 200) {
            throw new Error(data.status);
        } else {
            return data.json();
        }
        });
    }

    async function getPlanetsInfo() {
        document.querySelector("#planetList").innerHTML = null;
        document.querySelector(".allplanets").setAttribute("style", "display: flex");

        const allPlanetsList = await getJSONResponse(`https://swapi.dev/api/planets/?page=${pageNumber}`);

        allPlanetsList.results.map((p) => {
            document.querySelector("#planetList").insertAdjacentHTML("beforeend", `<p>${p.name}</p>` );
        });
        
    }


    buttonShowPlanets.addEventListener("click", function() {

        if (planetsTogle) {
            planetsTogle = false;
            document.querySelector(".allplanets").setAttribute("style", "display: none");
            return;
        } else {
            planetsTogle = true;
            return getPlanetsInfo();  
        }
    });


    prevButon.addEventListener("click", () => {
        if (pageNumber <= maxNumberOfPages && pageNumber > minNumberOfPages) {
            pageNumber--;
        } 
        getPlanetsInfo();
    })
    

    nextButon.addEventListener("click", () => {
        if (pageNumber < maxNumberOfPages && pageNumber >= minNumberOfPages) {
            pageNumber++;
        } 
        getPlanetsInfo();
    })

}

export default getStarwarsInfo;