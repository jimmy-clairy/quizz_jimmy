const form              = document.querySelector(".form-quizz");
let tableauResultats    = [];
const response          = ["c","d","a","b","d"];
const emojis            = ['🥳','🥰','🤔','🥲','😭','😒'];    // https://emojipedia.org/check-mark/
const titreResultat     = document.querySelector(".resultats h2");
const noteResultat     = document.querySelector(".note");
const aideResultat      = document.querySelector(".aide");
const toutesLesQuestions = document.querySelectorAll(".question-block");
let verifTableau        = [];


form.addEventListener("submit",(e)=> {
    e.preventDefault();
    
    
    for (let i = 1; i < 6; i++) {
       tableauResultats.push(document.querySelector("input[name=q" + i + "]:checked").value);
    }
    console.log(response);
    console.log(tableauResultats);

    verifFunc(tableauResultats)

    tableauResultats = [];
    
})

function verifFunc(tabResultats) {
   for(let i = 0; i < 5; i++){

       if(tabResultats[i] === response[i]){
            verifTableau.push(true);
       }else{
            verifTableau.push(false);
       }

   }

   console.log(verifTableau);
   afficherResultats(verifTableau);
   couleursFonction(verifTableau);
   verifTableau = []
}

function afficherResultats(tabCheck) {

    const nbDeFautes = tabCheck.filter(el => el === false).length;
    console.log(nbDeFautes);
    switch (nbDeFautes) {
        case 0:
            titreResultat.textContent = emojis[0] + " Bravo, c'est un sans faute " + emojis[0];
            aideResultat.innerText = "";
            noteResultat.innerText = "5/5";
            break;
        case 1:
            titreResultat.textContent = emojis[1] + " Vous y êtes presque ! " + emojis[1];
            aideResultat.innerText = "Retentez une autre réponse dans la case rouge, puis re-validez !";
            noteResultat.innerText = "4/5";
            break;
        case 2:
            titreResultat.textContent = emojis[2] + " Encore un effort ... " + emojis[2];
            aideResultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            noteResultat.innerText = "3/5";
            break;
        case 3:
            titreResultat.textContent = emojis[3] + " Il reste quelques erreurs.  " + emojis[3];
            aideResultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            noteResultat.innerText = "2/5";
            break;
        case 4:
            titreResultat.textContent = emojis[4] + " Peux mieux faire ! " + emojis[4];
            aideResultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            noteResultat.innerText = "1/5";
            break;
        case 5:
            titreResultat.textContent = emojis[5] + " Trop Trop nul " + emojis[5];
            aideResultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            noteResultat.innerText = "0/5";
            break;
    
        default:
            titreResultat.textContent = "Wops, cas inntendu.";
    }
}

function couleursFonction(tabValBool) {
    
    for (let i = 0; i < tabValBool.length; i++) {
        if(tabValBool[i] === true){
            toutesLesQuestions[i].style.background = "lightgreen";
        } else {
            toutesLesQuestions[i].style.background = "#ffb8b8";
            toutesLesQuestions[i].classList.add("echec");

            setTimeout(() => {
                toutesLesQuestions[i].classList.remove("echec");
            }, 500);
        }
        
    }
}

toutesLesQuestions.forEach(item => {
    item.addEventListener("click", () => {
        item.style.background = "white";
    })
})