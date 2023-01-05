const button = document.getElementById('monBouton');

 button.addEventListener('click', () => {
// //    alert("t'as cliqué sur le bouton")
 })

const paragraphe = document.getElementById('monParagraphe');

button.addEventListener('click', () => {
     paragraphe.innerHTML = "Je suis un paragraphe modifié"
 })

paragraphe.addEventListener('mouseover', () => {
    paragraphe.style.fontSize = "20px";
    paragraphe.style.color = "blue";
})

const maListe = document.getElementById('maListe')

button.addEventListener('click', () => {
    const mainLi = document.createElement("li");
    mainLi.textContent = "nouvel element"
    maListe.appendChild(mainLi);
})

