let myBody = document.querySelector("body");
myBody.style.backgroundImage = "url('img/hiver.jpg')";
myBody.style.backgroundSize = "cover";
myBody.style.backgroundRepeat = "no-repeat";

/*variables dates*/
let today = new Date();
let dateHiver = new Date('December 21');
let datePrintemps = new Date('March 20');
let dateEte = new Date('June 21');
let dateAutomne = new Date('September 23');

/*affiche selon la saison*/
if (today < datePrintemps && today >= dateHiver) {
	/*hiver*/
	var SNOW_Picture = "img/snow.gif"  
	var SNOW_no = 70;  

	var SNOW_browser_IE_NS = (document.body.clientHeight) ? 1 : 0;  
	var SNOW_browser_MOZ = (self.innerWidth) ? 1 : 0;  
	var SNOW_browser_IE7 = (document.documentElement.clientHeight) ? 1 : 0;  

	var SNOW_Time;  
	var SNOW_dx, SNOW_xp, SNOW_yp;  
	var SNOW_am, SNOW_stx, SNOW_sty;   
	var i, SNOW_Browser_Width, SNOW_Browser_Height;  
	var SNOW_rotate;

	if (SNOW_browser_IE_NS)  
	{  
	SNOW_Browser_Width = document.body.clientWidth;  
	SNOW_Browser_Height = document.body.clientHeight;  
	}  
	else if (SNOW_browser_MOZ)  
	{  
	SNOW_Browser_Width = self.innerWidth - 20;  
	SNOW_Browser_Height = self.innerHeight;  
	}  
	else if (SNOW_browser_IE7)  
	{  
	SNOW_Browser_Width = document.documentElement.clientWidth;  
	SNOW_Browser_Height = document.documentElement.clientHeight;  
	}  

	SNOW_dx = new Array();  
	SNOW_xp = new Array();  
	SNOW_yp = new Array();  
	SNOW_am = new Array();  
	SNOW_stx = new Array();  
	SNOW_sty = new Array();
	SNOW_rotate = new Array();

	for (i = 0; i < SNOW_no; ++ i)   
	{   
	SNOW_dx[i] = 0;   
	SNOW_xp[i] = Math.random()*(SNOW_Browser_Width-50);  
	SNOW_yp[i] = Math.random()*SNOW_Browser_Height;  
	SNOW_am[i] = Math.random()*20;   
	SNOW_stx[i] = 0.02 + Math.random()/10;  
	SNOW_sty[i] = 0.7 + Math.random();
	SNOW_rotate[i] = 360*Math.random();  
	if (i == 0) document.write("<\div id=\"SNOW_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><a href=\"http://www.peters1.dk\" target=\"_blank\"><\img src=\""+SNOW_Picture+"\" border=\"0\"></a><\/div>");  
	else document.write("<\div id=\"SNOW_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><\img src=\""+SNOW_Picture+"\" border=\"0\"><\/div>");  
	}  

	function SNOW_Weather() {   

	for (i = 0; i < SNOW_no; ++ i) {   
		SNOW_yp[i] += SNOW_sty[i];  

	    if (SNOW_yp[i] > SNOW_Browser_Height-50) {  
	        SNOW_xp[i] = Math.random()*(SNOW_Browser_Width-SNOW_am[i]-30);  
	        SNOW_yp[i] = 0;  
	        SNOW_stx[i] = 0.02 + Math.random()/10;  
	        SNOW_sty[i] = 0.7 + Math.random();  
	    }  

		SNOW_dx[i] += SNOW_stx[i];  

	    document.getElementById("SNOW_flake"+i).style.top=SNOW_yp[i]+"px";  
	    document.getElementById("SNOW_flake"+i).style.left=SNOW_xp[i] + SNOW_am[i]*Math.sin(SNOW_dx[i])+"px";  
	}  

	SNOW_Time = setTimeout("SNOW_Weather()", 20);  

	}  

	SNOW_Weather();
}
if (today < dateHiver && today >= dateAutomne) {
	/*automne*/
	var SNOW_Picture = "img/feuille.gif"  
	var SNOW_no = 70;  

	var SNOW_browser_IE_NS = (document.body.clientHeight) ? 1 : 0;  
	var SNOW_browser_MOZ = (self.innerWidth) ? 1 : 0;  
	var SNOW_browser_IE7 = (document.documentElement.clientHeight) ? 1 : 0;  

	var SNOW_Time;  
	var SNOW_dx, SNOW_xp, SNOW_yp;  
	var SNOW_am, SNOW_stx, SNOW_sty;   
	var i, SNOW_Browser_Width, SNOW_Browser_Height;  
	var SNOW_rotate;

	if (SNOW_browser_IE_NS)  
	{  
	SNOW_Browser_Width = document.body.clientWidth;  
	SNOW_Browser_Height = document.body.clientHeight;  
	}  
	else if (SNOW_browser_MOZ)  
	{  
	SNOW_Browser_Width = self.innerWidth - 20;  
	SNOW_Browser_Height = self.innerHeight;  
	}  
	else if (SNOW_browser_IE7)  
	{  
	SNOW_Browser_Width = document.documentElement.clientWidth;  
	SNOW_Browser_Height = document.documentElement.clientHeight;  
	}  

	SNOW_dx = new Array();  
	SNOW_xp = new Array();  
	SNOW_yp = new Array();  
	SNOW_am = new Array();  
	SNOW_stx = new Array();  
	SNOW_sty = new Array();
	SNOW_rotate = new Array();

	for (i = 0; i < SNOW_no; ++ i)   
	{   
	SNOW_dx[i] = 0;   
	SNOW_xp[i] = Math.random()*(SNOW_Browser_Width-50);  
	SNOW_yp[i] = Math.random()*SNOW_Browser_Height;  
	SNOW_am[i] = Math.random()*20;   
	SNOW_stx[i] = 0.02 + Math.random()/10;  
	SNOW_sty[i] = 0.7 + Math.random();
	SNOW_rotate[i] = 360*Math.random();  
	if (i == 0) document.write("<\div id=\"SNOW_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><a href=\"http://www.peters1.dk\" target=\"_blank\"><\img src=\""+SNOW_Picture+"\" border=\"0\"></a><\/div>");  
	else document.write("<\div id=\"SNOW_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><\img src=\""+SNOW_Picture+"\" border=\"0\"><\/div>");  
	}  

	function SNOW_Weather() {   

	for (i = 0; i < SNOW_no; ++ i) {   
		SNOW_yp[i] += SNOW_sty[i];  

	    if (SNOW_yp[i] > SNOW_Browser_Height-50) {  
	        SNOW_xp[i] = Math.random()*(SNOW_Browser_Width-SNOW_am[i]-30);  
	        SNOW_yp[i] = 0;  
	        SNOW_stx[i] = 0.02 + Math.random()/10;  
	        SNOW_sty[i] = 0.7 + Math.random();  
	    }  

		SNOW_dx[i] += SNOW_stx[i];  

	    document.getElementById("SNOW_flake"+i).style.top=SNOW_yp[i]+"px";  
	    document.getElementById("SNOW_flake"+i).style.left=SNOW_xp[i] + SNOW_am[i]*Math.sin(SNOW_dx[i])+"px";  
	}  

	SNOW_Time = setTimeout("SNOW_Weather()", 20);  

	}  

	SNOW_Weather();
}