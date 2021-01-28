const inpName = document.querySelector('.form-groupe:nth-child(1) input');
const inpAdress = document.querySelector('.form-groupe:nth-child(2) input');
const inpPcode = document.querySelector('.form-groupe:nth-child(3) input');
const inpPays = document.querySelector('.form-groupe:nth-child(4) input');
const inpTelNum = document.querySelector('.form-groupe:nth-child(6) input');
const inpMail = document.querySelector('.form-groupe:nth-child(7) input');
const inpCB = document.querySelector('.form-groupe:nth-child(8) input');
const inpConfirm = document.querySelector('.form-groupe:nth-child(9) input');
const allImg = document.querySelectorAll('.icone-verif');
const allSpan = document.querySelectorAll('span');
const allLigne = document.querySelectorAll('.ligne div');


/* 

Add an Event Listener on Name Input

*/

inpName.addEventListener('input', function(e){

    if(e.target.value.length >= 3) {
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/check.svg";
        allSpan[0].style.display = "none";
    }   
    else {
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/error.svg";
        allSpan[0].style.display = "inline";
    }

})




/* 

Add an Event Listener on Mail Input

*/

inpMail.addEventListener('input', function(e){

    const regexEmail = /\S+@\S+\.\S+/;
    
    if(e.target.value.search(regexEmail) === 0){

        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/check.svg";
        allSpan[1].style.display = "none";

    } else if(e.target.value.search(regexEmail) === -1) {

        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/error.svg";
        allSpan[1].style.display = "inline";

    }

})

/* Creation/Validation of email */

let valeurInp;
const specialCar = /[^a-zA-Z0-9]/;
const alphabet = /[a-z]/i;
const chiffres = /[0-9]/;

let objValidation = {
    symbole : 0,
    lettre : 0,
    chiffre : 0
}

/* 

Add an Event Listener on cb Input

*/

inpCB.addEventListener('input', function(e){

    valeurInp = e.target.value;

    if(valeurInp.search(specialCar) !== -1){
        objValidation.symbole = 1;
    }
    if(valeurInp.search(alphabet) !== -1){
        objValidation.lettre = 1;
    }
    if(valeurInp.search(chiffres) !== -1){
        objValidation.chiffre = 1;
    }



    if(e.inputType = 'deleteContentBackward'){
        if(valeurInp.search(specialCar) === -1){
            objValidation.symbole = 0;
        }
        if(valeurInp.search(alphabet) === -1){
            objValidation.lettre = 0;
        }
        if(valeurInp.search(chiffres) === -1){
            objValidation.chiffre = 0;
        }
    } 

    let testAll = 0;
    for(const property in objValidation){
        if(objValidation[property] > 0){
            testAll++;
        }
    }
    if(testAll < 3){
        allSpan[2].style.display = "inline";
        allImg[2].style.display = "inline";
        allImg[2].src = "ressources/error.svg";
    } else {
        allSpan[2].style.display = "none";
        allImg[2].src = "ressources/check.svg";
    }


})


/* 

Add an Event Listener on Confirmation Input

*/

inpConfirme.addEventListener('input',function(e){

    if(e.target.value.length === 0){
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/error.svg";
    }
    else if(e.target.value === valeurInp){
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/check.svg";
    } else {
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/error.svg";
    }

})