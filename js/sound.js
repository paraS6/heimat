//ECMASCRIPT Sound
//Jens Roemer


//bei Klick auf jeweiligen Button entweder Ton an oder aus
var mute_Audio = document.getElementById("muteButton");
var un_Mute_Audio = document.getElementById("unMuteButton");
//Standart Ton ist eingeschaltet
var mute = "on";

//Funktion zum Stumm schalten
function muteAudio(){
    //Falls Ton gerade abgespielt wird muss dieser gestoptt werden.
    document.getElementById("nameAudio").pause();
    //Standart Ton wird abgeschaltet
    mute = "off";
//    alert(mute);
}
function unMuteAudio(){
    //Standart Ton wird eingeschaltet
    mute = "on";
//    alert(mute);
}

//in Jedem Frame den Scrollwert berechnen und Ton ab gewissem Wert abspielen
window.addEventListener('scroll', function(){requestAnimationFrame(sc(mute));})

//Funktion zum Ton abspielen
function sc(mute) {
    //Scrolwert berechnen
    var scroll = window.pageYOffset;
    //Variable für die AudioDateien
    var nameAudio = document.getElementById("nameAudio");
    
    
    
    
    //Gemutet?
    if(mute == "off"){
        nameAudio.pause();
    }
    //Sonst Spiele ab
    else{
        if(scroll < 46000){
            nameAudio.pause();
        }
        if(scroll > 46000 && scroll < 47000){
            nameAudio.play();
        }
        if(scroll > 47000){
            nameAudio.pause();
        }
    }
}