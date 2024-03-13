
const mesProjets= document.getElementById('myProjects');
const project__link = document.getElementsByClassName('project__link');
const closingElement = document.getElementsByClassName('close');
const redirection = document.getElementsByClassName('redirection');

for (let i = 0; i < project__link.length; i++){console.log(project__link[i]);
    project__link[i].addEventListener("click",() => {
        mesProjets.style.visibility = "hidden";
})
}
for (let i = 0; i < closingElement.length; i++){
    closingElement[i].addEventListener("click", () => {
        mesProjets.style.visibility = "visible";
    })
}
for (let i = 0; i < redirection.length; i++){
    redirection[i].addEventListener("click", () => {
        mesProjets.style.visibility = "visible";
    })
}