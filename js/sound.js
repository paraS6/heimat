//ECMASCRIPT Sound
//Jens Roemer


//bei Klick auf jeweiligen Button entweder Ton an oder aus
var mute_Audio = document.getElementById("muteButton");
var un_Mute_Audio = document.getElementById("unMuteButton");
//Standart Ton ist eingeschaltet
var mute = "on";

//Funktion zum Stumm schalten
document.getElementsByTagName("input")[1].onclick = function(){
    //Falls Ton gerade abgespielt wird muss dieser gestoptt werden.
    document.getElementById("nameAudio").pause();
    //Standart Ton wird abgeschaltet
    mute = "off";
//    alert(mute);

    //buttonStyle
    mute_Audio.style.display = 'none';
    un_Mute_Audio.style.display = 'block';
}
document.getElementsByTagName("input")[0].onclick = function(){
    //Standart Ton wird eingeschaltet
    mute = "on";
//    alert(mute);
    //buttonStyle

    mute_Audio.style.display = 'block';
    un_Mute_Audio.style.display = 'none';
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
/*document.getElementsByTagName("nav")[0].onclick = function (){


 document.getElementsByTagName("nav")[0].style.backgroundColor = "green";
 }*/