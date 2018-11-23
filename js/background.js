let myDate = new Date();
let season;
let today = myDate.getMonth();
console.log(today);
if ((today >= 0 && today < 2) || today === 11) {
    season = "winter";
}
else if ((today >= 2 && today < 5)) {
    season = "spring";
}
else if ((today >= 5 && today < 8)) {
    season = "summer";
}
else {
    season = "autumn";
}

let myBody = document.querySelector("body");
myBody.style.backgroundSize = "cover";
myBody.style.backgroundRepeat = "no-repeat";

var SNOW_Picture;

if (season==="autumn"){
    SNOW_Picture = "img/feuille.gif";
    myBody.style.backgroundImage = "url('img/automn.jpg')";
}
if (season==="winter") {
    SNOW_Picture = "img/snow.gif";
    myBody.style.backgroundImage = "url('img/hiver.jpg')";
}
if (season === "summer") {
    SNOW_Picture = "img/pollenPiss.png";
    myBody.style.backgroundImage  = "url('img/ete.jpg')";
}
if (season === "spring") {
    SNOW_Picture = "img/fleur.png";
    myBody.style.backgroundImage  = "url('img/printemps.jpg')";
}

var SNOW_no = 40;  

//façon de définir la largeur de la fenêtre pour différents
//anciens navigateurs
var SNOW_browser_IE_NS = (document.body.clientHeight) ? 1 : 0;  
var SNOW_browser_MOZ = (self.innerWidth) ? 1 : 0;  
var SNOW_browser_IE7 = (document.documentElement.clientHeight) ? 1 : 0;  

var SNOW_Time;  
var SNOW_dx, SNOW_xp, SNOW_yp;  
var SNOW_am, SNOW_stx, SNOW_sty;   
var i, SNOW_Browser_Width, SNOW_Browser_Height;  

//si les syntaxes des vieux browsers sont reconnues, faire en fonction
if (SNOW_browser_IE_NS) {  
SNOW_Browser_Width = document.body.clientWidth;  
SNOW_Browser_Height = document.body.clientHeight;  
}  
else if (SNOW_browser_MOZ) {  
SNOW_Browser_Width = self.innerWidth - 20;  
SNOW_Browser_Height = self.innerHeight;  
}  
else if (SNOW_browser_IE7) {  
SNOW_Browser_Width = document.documentElement.clientWidth;  
SNOW_Browser_Height = document.documentElement.clientHeight;  
}  

//initialisation des tableau de valeurs pour le mouvement des feuilles
SNOW_dx = new Array();  
SNOW_xp = new Array();  
SNOW_yp = new Array();  
SNOW_am = new Array();  
SNOW_stx = new Array();  
SNOW_sty = new Array();

//pour chacune des feuilles, initialiser une valeur dans chaque tableau
for (i = 0; i < SNOW_no; ++ i){   
    SNOW_dx[i] = 0; 
    //valeurs de pos. random sur la largeur de la fenêtre (moins une marge) :
    SNOW_xp[i] = Math.random()*(SNOW_Browser_Width - 50 );
    //valeur de pos. random sur la hauteur du document :
    SNOW_yp[i] = Math.random()*SNOW_Browser_Height;
    SNOW_am[i] = Math.random()*20;   //facteur d'amplitude de la sinusoide.
    SNOW_stx[i] = 0.02 + Math.random()/10;  //balancement
    SNOW_sty[i] = 0.7 + Math.random();//facteur de gravité

    document.write("<\div id=\"SNOW_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><\img src=\""+SNOW_Picture+"\" border=\"0\"><\/div>");  
}

function SNOW_Weather() {   

    for (i = 0; i < SNOW_no; ++ i) {   
        SNOW_yp[i] += SNOW_sty[i];//incrémentation de la position y par le facteur de gravité 
        
        //si une des feuilles est sorti du champ de la hauteur du navigateur
        if (SNOW_yp[i] > SNOW_Browser_Height - 50) {  
            SNOW_xp[i] = Math.random()*(SNOW_Browser_Width - SNOW_am[i] - 30);//recalcul de x
            SNOW_yp[i] = 0;//reset de la pos. y tout en haut
            SNOW_stx[i] = 0.02 + Math.random() / 10; //amplitude du balancement 
            SNOW_sty[i] = 0.7 + Math.random(); //facteur de gravité
        }  

        SNOW_dx[i] += SNOW_stx[i];//incrémentation de la position x par le facteur
        // d'amplitude sinusoidale

        //application du mouvement vers le bas (top :yp)
        document.getElementById("SNOW_flake"+i).style.top=SNOW_yp[i]+"px";
        //application du balancement(left: xp)
        document.getElementById("SNOW_flake"+i).style.left=SNOW_xp[i] + SNOW_am[i]*Math.sin(SNOW_dx[i])+"px"; 
    }  

SNOW_Time = setTimeout("SNOW_Weather()", 20); 
    //boucle d'animation :
    //appeler récursivement la fonction snow_weather pour rafraichir l'affichage des feuilles
    //toutes les 20ms.(ici)

}  
//appeler la fonction snowWeather une première fois.
SNOW_Weather();