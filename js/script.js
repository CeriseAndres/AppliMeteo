/*javascript*/
let myBody = document.querySelector("body");
myBody.style.backgroundImage = "url('img/lluvia-animada.gif')";
myBody.style.backgroundSize = "cover";
let canvasParent = document.getElementById('canvasParent');
let ctx;
let mouseIsDown = false;


/*Classes MapArea et Map pour créer l'objet carte et son conteneur (canvas)*/
class MapArea {
    
    constructor(width, height, parent){
        this.canvas = document.createElement("canvas");
        parent.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
        this.width = width;
        this.height = height;
    }
    
    init() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        updateMap();
    }
    clear() {
        
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

let currentMapX = -200;
let currentMapY = -200;
class Map {
    
    constructor(x, y, width, height, source) {
        this.grabX;
        this.grabY;
        this.offsetX;
        this.offsetY;
        this.x = x;
        this.y = y;
        this.mapImage = new Image();
        this.mapImage.src = source;
        this.width = this.mapImage.width;
        this.height = this.mapImage.height;
    }
    
    update() {
        ctx = myMapArea.context;
        ctx.drawImage(this.mapImage, currentMapX, currentMapY, this.width, this.height);
    }
}

/*fonctions de mise à jour de l'affichage pour pouvoir afficher la map et rafraichir son affichage si l'utilisateur la déplace*/
function updateMap() {
    myMapArea.clear();
    myMap.update();
}

window.onload = function() {
    myMapArea.init();
}

function initGrabber(e) {
    let initGrabX = e.clientX;
    let initGrabY = e.clientY;
    myMap.offsetX = initGrabX;
    myMap.offsetY = initGrabY;
}

function dragMap(e) {

    if (mouseIsDown) {
        myMap.grabX = e.clientX;
        myMap.grabY = e.clientY;
        myMap.x = myMap.grabX - myMap.offsetX;
        myMap.y = myMap.grabY - myMap.offsetY;
        currentMapX = myMap.x;
        currentMapY = myMap.y;
        myMap.update();
        requestAnimationFrame(updateMap);
    }
    else {
        cancelAnimationFrame(updateMap);
    }

}


window.onmousedown = function() {
    mouseIsDown = true;
}
window.onmouseup = function() {
    mouseIsDown = false;
}

let myMapArea = new MapArea(500, 500, canvasParent);
let myMap = new Map(-200, -200, 1911, 1781, "img/carte-detaillee-france.jpg");

canvasParent.addEventListener("mousedown", initGrabber);
canvasParent.addEventListener("mousemove", dragMap);