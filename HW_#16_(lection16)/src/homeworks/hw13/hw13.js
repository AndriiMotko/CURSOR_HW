function getStarwarsInfo() {
    const charactersFoto = {
        "Luke Skywalker": "characters/Luke Skywalker.png",
        "C-3PO": "characters/C-3PO.png",
        "R2-D2":"characters/R2-D2.png",
        "Darth Vader":"characters/Darth Vader.png",
        "Leia Organa":"characters/Leia Organa.png",
        "Owen Lars":"characters/Owen Lars.png",
        "Beru Whitesun lars":"characters/Beru Whitesun lars.png",
        "R5-D4":"characters/R5-D4.png",
        "Biggs Darklighter":"characters/Biggs Darklighter.png",
        "Obi-Wan Kenobi":"characters/Obi-Wan_Kenobi.png",
        "Zam Wesell": "characters/Zam Wesell.png",
        "Yoda": "characters/Yoda.png",
        "Yarael Poof": "characters/Yarael Poof.png",
        "Wicket Systri Warrick": "characters/Wicket Systri Warrick.png",
        "Watto": "characters/Watto.png",
        "Taun We": "characters/Taun We.png",
        "Tarfful": "characters/Tarfful.png",
        "Sly Moore": "characters/Sly Moore.png",
        "Shmi Skywalker": "characters/Shmi Skywalker.png",
        "Shaak Ti": "characters/Shaak Ti.png",
        "Sebulba": "characters/Sebulba.png",
        "San Hill": "characters/San Hill.png",
        "Saesee Tiin": "characters/Saesee Tiin.png",
        "Rugor Nass": "characters/Rugor Nass.png",
        "Roos Tarpals": "characters/Roos Tarpals.png",
        "Ric Olié": "characters/Ric Olié.jpg",
        "Raymus Antilles": "characters/Raymus Antilles.png",
        "Ratts Tyerel": "characters/Ratts Tyerel.jpg",
        "R4-P17": "characters/R4-P17.png",
        "Qui-Gon Jinn": "characters/Qui-Gon Jinn.png",
        "Quarsh Panaka": "characters/Quarsh Panaka.png",
        "Poggle the Lesser": "characters/Poggle the Lesser.png",
        "Plo Koon": "characters/Plo Koon.png",
        "Palpatine": "characters/Palpatine.png",
        "Padmé Amidala": "characters/Padmé Amidala.png",
        "Nute Gunray": "characters/Nute Gunray.png",
        "Nien Nunb": "characters/Nien Nunb.png",
        "Mon Mothma": "characters/Mon Mothma.png",
        "Mas Amedda": "characters/Mas Amedda.png",
        "Mace Windu": "characters/Mace Windu.png",
        "Luminara Unduli": "characters/Luminara Unduli.png",
        "Lobot": "characters/Lobot.png",
        "Lando Calrissian": "characters/Lando Calrissian.png",
        "Lama Su": "characters/Lama Su.png",
        "Ki-Adi-Mundi": "characters/Ki-Adi-Mundi.png",
        "Jocasta Nu": "characters/Jocasta Nu.png",
        "Jar Jar Binks": "characters/Jar Jar Binks.png",
        "Jango Fett": "characters/Jango Fett.png",
        "IG-88": "characters/IG-88.png",
        "Han Solo": "characters/Han Solo.png",
        "Grievous": "characters/Grievous.png",
        "Gregar Typho": "characters/Gregar Typho.jpg",
        "Gasgano": "characters/Gasgano.png",
        "Dormé": "characters/Dormé.jpg",
        "Dexter Jettster": "characters/Dexter Jettster.png",
        "Cordé": "characters/Cordé.png",
        "Cliegg Lars": "characters/Cliegg Lars.png",
        "Bossk": "characters/Bossk.png",
        "Ayla Secura": "characters/Ayla Secura.png",
        "Bail Prestor Organa": "characters/Bail Prestor Organa.jpg",
        "Ben Quadinaros": "characters/Ben Quadinaros.png",
        "Barriss Offee": "characters/Barriss Offee.png",
        "Boba Fett": "characters/Boba Fett.png",
        "Wat Tambor": "characters/Wat Tambor.png",
        "Dooku": "characters/Dooku.png",
        "Adi Gallia": "characters/Adi Gallia.png",
        "Eeth Koth": "characters/Eeth Koth.png",
        "Kit Fisto": "characters/Kit Fisto.png",
        "Dud Bolt": "characters/Dud Bolt.jpg",
        "Darth Maul": "characters/Darth Maul.png",
        "Finis Valorum": "characters/Finis Valorum.png",
        "Bib Fortuna": "characters/Bib Fortuna.png",
        "Arvel Crynyd": "characters/Arvel Crynyd.jpg",
        "Ackbar": "characters/Ackbar.png",
        "Wedge Antilles": "characters/Wedge Antilles.png",
        "Chewbacca": "characters/Chewbacca.png",
        "Jek Tono Porkins": "characters/Jek Tono Porkins.jpg",
        "Jabba Desilijic Tiure": "characters/Jabba Desilijic Tiure.png",
        "Greedo": "characters/Greedo.png",
        "Wilhuff Tarkin": "characters/Wilhuff Tarkin.png",
        "Anakin Skywalker": "characters/Anakin Skywalker.png",
        "Tion Medon": "characters/Tion Medon.png",
    };

    const buttonShowCharacters = document.getElementById('showCharacters');
    let charactersTogle = false;

    const buttonShowPlanets = document.getElementById("showPlanets");
    let planetsTogle = false;

    let pageNumber = 1;
    const maxNumberOfPages = 5;
    const minNumberOfPages = 1;
    const prevButon = document.getElementById("previous");
    const nextButon = document.getElementById("next");



    async function findSrcFoto(name, objSrc) {
        for(let key in objSrc) {
            if (key === name) {
                return await objSrc[key];
            } else {
                continue
            }
        }
    }

    async function getJSONResponse(url) {
        return fetch(url).then(data => {
    
        if (data.status !== 200) {
            throw new Error(data.status);
        } else {
            return data.json();
        }
        });
    }

    async function createItem(dataCharacter) {

        const charactersWrapp = document.querySelector(".characters");
        const characterItem = document.createElement('div');
        characterItem.classList.add("character-item");
        charactersWrapp.append(characterItem);

        const characterFoto = document.createElement("img");
        const srcToFoto = await findSrcFoto(dataCharacter.name, charactersFoto);
        characterFoto.setAttribute("src", srcToFoto);
        characterItem.prepend(characterFoto); 

        const characterName = document.createElement("div");
        characterName.classList.add("character-item-fullname");
        characterItem.append(characterName);
        characterName.insertAdjacentText("beforeend",dataCharacter.name);

        const characterBirthday = document.createElement("div");
        characterBirthday.classList.add("character-item-birthday");
        characterItem.append(characterBirthday);
        characterBirthday.insertAdjacentText("beforeend", dataCharacter.birth_year);

        const characterGender = document.createElement("div");
        characterGender.classList.add("character-item-gender");
        characterItem.append(characterGender);
        characterGender.insertAdjacentText("beforeend", dataCharacter.gender);
    }

    async function getCharactersInfo() {
        
        const filmNumber = document.getElementById("films").value;
        const dataFilm = await getJSONResponse(`https://swapi.dev/api/films/${filmNumber}`);

        const charactersWrapp = document.createElement('div');
        charactersWrapp.classList.add("characters");
        document.body.append(charactersWrapp);
        
        for (let i = 0; i < dataFilm.characters.length; i++) {
            const urlCharacter = dataFilm.characters[i];
            const dataCharacter =  await getJSONResponse(urlCharacter);

            createItem(dataCharacter);
        } 
    }

    buttonShowCharacters.addEventListener("click", function() {
        
        if (planetsTogle) {
            document.querySelector(".allplanets").setAttribute("style", "display: none");
        } 
        if (charactersTogle) {
            charactersTogle = false;
            document.querySelector(".characters").remove();
            return;
        } else {
            charactersTogle = true;
            return getCharactersInfo();
        }
    });


    async function getPlanetsInfo() {
        document.querySelector("#planetList").innerHTML = null;
        document.querySelector(".allplanets").setAttribute("style", "display: flex");

        const allPlanetsList = await getJSONResponse(`https://swapi.dev/api/planets/?page=${pageNumber}`);

        allPlanetsList.results.map((p) => {
            document.querySelector("#planetList").insertAdjacentHTML("beforeend", `<p>${p.name}</p>` );
        });
        
    }



    buttonShowPlanets.addEventListener("click", function() {

        if (charactersTogle) {
            charactersTogle = false;
            document.querySelector(".characters").remove();
        } 
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