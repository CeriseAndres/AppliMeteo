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
        this.interval = setInterval(updateMap, 50);
    }
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


class Map {
    
    constructor(x, y, width, height, source) {
        
        this.x = x;
        this.y = y;
        this.moveX = 0;
        this.moveY = 0;
        this.mapImage = new Image();
        this.mapImage.src = source;
        this.width = this.mapImage.width;
        this.height = this.mapImage.height; 
    }
    
    update() {
        ctx = myMapArea.context;
        ctx.drawImage(this.mapImage, this.x, this.y, this.width, this.height);
    }
    move() {
        this.x += moveX;
        this.y += moveY;
        this.update();
    }
}

/*fonctions de mise à jour de l'affichage pour pouvoir afficher la map et rafraichir son affichage si l'utilisateur la déplace*/
function updateMap() {
    myMap.update();
}

window.onload = function() {
    myMapArea.init();
    console.log(myMap.moveX);
}

function dragMap(e) {
    if (mouseIsDown) {
        myMap.moveX = e.clientX;
        myMap.moveY = e.clientY;
        myMap.move();
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
canvasParent.addEventListener("mousemove", dragMap);

myMap.update();
console.log(myMap.moveX);

