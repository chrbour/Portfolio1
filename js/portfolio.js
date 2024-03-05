
const mesProjets= document.getElementById('mesProjets');
const lienProjet = document.getElementsByClassName('lienProjet');
const closingElement = document.getElementsByClassName('close');
const redirection = document.getElementsByClassName('redirection');

for (let i=0; i<lienProjet.length;i++){console.log(lienProjet[i]);
    lienProjet[i].addEventListener("click",() => {
        mesProjets.style.visibility = "hidden";
        console.log('image cliquée', mesProjets);
})
}
for (let i=0; i<closingElement.length; i++){
    closingElement[i].addEventListener("click", () => {
        mesProjets.style.visibility = "visible";
        console.log('close cliqué');
    })
}
for (let i=0; i<redirection.length; i++){
    redirection[i].addEventListener("click", () => {
        mesProjets.style.visibility = "visible";
        console.log('lien navbar cliqué');
    })
}