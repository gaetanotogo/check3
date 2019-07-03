var changeTextArea=document.getElementById("textarea");
var changeTaille=document.getElementById("taille");
var changePolice=document.getElementById("police");



function bold(){

        if(changeTextArea.style.fontWeight=="bold"){
            changeTextArea.style.fontWeight="normal";
        }
        else{
            changeTextArea.style.fontWeight="bold";
        }
}

function Italic(){
        if(changeTextArea.style.fontStyle=="italic"){
            changeTextArea.style.fontStyle="normal";
        }
        else{
            changeTextArea.style.fontStyle="italic";
        }
}

function Underline(){
        if(changeTextArea.style.textDecoration=="underline"){
            changeTextArea.style.textDecoration="";
        }
        else{
            changeTextArea.style.textDecoration="underline";
        }
}
    
function changerTaille(){
        changeTextArea.style.fontSize=changeTaille.value;
}
    
function ChangerPolice(){
        changeTextArea.style.fontFamily=changePolice.value;
}
    