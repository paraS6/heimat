//JavaScript Sound
//Jens Roemer


//bei Klick auf jeweiligen Button entweder Ton an oder aus
var mute_Audio = document.getElementById("muteButton");
var un_Mute_Audio = document.getElementById("unMuteButton");
//Standart Ton ist eingeschaltet
var mute = "on";

//Funktion zum Stumm schalten
document.getElementsByTagName("input")[1].onclick = function(){
    //Falls Ton gerade abgespielt wird muss dieser gestoptt werden.
    document.getElementById("durchsageAudio").pause();
    document.getElementById("mariachiAudio").pause();
    document.getElementById("fansAudio").pause();
    //Standart Ton wird abgeschaltet
    mute = "off";

    //buttonStyle
    mute_Audio.style.display = 'none';
    un_Mute_Audio.style.display = 'block';
}
document.getElementsByTagName("input")[0].onclick = function(){
    //Standart Ton wird eingeschaltet
    mute = "on";
    //buttonStyle

    mute_Audio.style.display = 'block';
    un_Mute_Audio.style.display = 'none';
}

//in Jedem Frame den Scrollwert berechnen und Ton ab gewissem Wert abspielen
window.addEventListener('scroll', function(){requestAnimationFrame(function(){sc(mute)});})

//Funktion zum Ton abspielen
function sc(mute) {
    //Scrolwert berechnen
    var scroll = window.pageYOffset;
    //Variable für die AudioDateien
    var durchsage = document.getElementById("durchsageAudio");
    var mariachi = document.getElementById("mariachiAudio");
    var fans = document.getElementById("fansAudio");


    //Gemutet?
    if(mute == "off"){
        durchsage.pause();
        mariachi.pause();
        fans.pause();
    }
    //Sonst Spiele ab
    else{
        //Bahnhof Durchsage
        if(scroll < 49900){
            durchsage.pause();
        }
        if(scroll > 49900 && scroll < 55500){
            durchsage.play();
        }
        if(scroll > 55500){
            durchsage.pause();
        }
        //Fangesaenge
        if(scroll <60000){
            fans.pause();
        }
        if(scroll >60000 && scroll < 70000){
            fans.play();
        }
        if(scroll > 70000){
            fans.pause();
        }
        //Mariachi Band
        if(scroll < 78000){
            mariachi.pause();
        }
        if(scroll > 78000 && scroll < 86000){
            mariachi.play();
        }
        if(scroll > 86000){
            mariachi.pause();
        }
    }
}