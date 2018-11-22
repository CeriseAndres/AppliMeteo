/*javascript*/

/*selection des onglets par jours (recherche simple)*/
let searchTabs = document.getElementsByClassName("tab");
let detailsTitle = document.querySelector(".detailsHeader>h5");
let date = new Date();
for (let tab of searchTabs) {
    tab.onclick = function(){
        for (let tab of searchTabs) {
            tab.setAttribute("class", "tab");
        }
        tab.setAttribute("class", "tab active");
        detailsTitle.textContent = tab.querySelector("h6").textContent;
    }
}

let dayParts = document.getElementsByClassName("dayPart");
for (let part of dayParts) {
    part.onclick = function() {
        for (let part of dayParts) {
            part.setAttribute("class", "dayPart")
        }
        part.setAttribute("class", "dayPart active");
    }
}