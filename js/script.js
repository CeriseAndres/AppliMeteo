/*selection des onglets par jours (recherche simple)*/
let searchTabs = document.getElementsByClassName("tab");
let detailsTitle = document.querySelector(".detailsHeader>h5");
//passer en classe active les onglets sur lesquels on clique :
for (let tab of searchTabs) {
    tab.onclick = function(){
        for (let tab of searchTabs) {
            tab.setAttribute("class", "tab");
        }
        tab.setAttribute("class", "tab active");
        detailsTitle.textContent = tab.querySelector("h6").textContent;
    }
}

//même chose pour les onglets d'affichage des détails du jour
let dayParts = document.getElementsByClassName("dayPart");
for (let part of dayParts) {
    part.onclick = function() {
        for (let part of dayParts) {
            part.setAttribute("class", "dayPart")
        }
        part.setAttribute("class", "dayPart active");
    }
}

/*affichage type donnée sur carte*/
//onglets du menu de recherche (seulement 3 pour le moment)
let prevSearchTab = document.getElementById("prevSearch");
let tempSearchTab = document.getElementById("tempSearch");
let windSearchTab = document.getElementById("windSearch");

let prevDataArray = document.getElementsByClassName("prevGrid");
let tempDataArray = document.getElementsByClassName("tempGrid");
let windDataArray = document.getElementsByClassName("windGrid");

//pour l'onglet prévisions
prevSearchTab.onclick = function() {
    for (prevData of prevDataArray) {
        prevData.style.display = "block";
        for (tempData of tempDataArray) {
            tempData.style.display = "none";
        }
        for (windData of windDataArray) {
            windData.style.display = "none";
        }
    }
}

//pour l'onglet températures
tempSearchTab.onclick = function() {
    for (tempData of tempDataArray) {
        tempData.style.display = "block";
        for (prevData of prevDataArray) {
            prevData.style.display = "none";
        }
        for (windData of windDataArray) {
            windData.style.display = "none";
        }
    }
}

/*couleur polices temérature en fonction de la valeur*/
let tmpVals = document.getElementsByClassName("tmpVal");
for (tmpVal of tmpVals) {
    let nodeTmpVal = parseInt(tmpVal.textContent);
    if (nodeTmpVal >= 15 && nodeTmpVal < 25) {
        tmpVal.style.color = "#092";
    }
    else if (nodeTmpVal >= 25) {
        tmpVal.style.color = "#f55";
    }
}

//pour l'onglet vents
windSearchTab.onclick = function() {
    for (windData of windDataArray) {
        windData.style.display = "flex";
        for (tempData of tempDataArray) {
            tempData.style.display = "none";
        }
        for (prevData of prevDataArray) {
            prevData.style.display = "none";
        }
    }
}