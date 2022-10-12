//recuperation des boutons
const accessoires = document.querySelector('.ac');
const btn1 = document.querySelector('.acbtn')
const chaussure = document.querySelector('.chau');
const btn2 =document.querySelector('.acbtn2')
const enfant = document.querySelector('.enf');
const btn3 = document.querySelector('.acbtn3')
const femme = document.querySelector('.fem');
const btn4 =document.querySelector('.acbtn4');
const homme = document.querySelector('.hom');
const btn5 = document.querySelector('.acbtn5')

btn1.addEventListener('mousedown',()=>{
accessoires.classList.toggle('acf');
chaussure.classList.remove('chauf');
enfant.classList.remove('enff');
femme.classList.remove('femf')
homme.classList.remove('homf')
});

btn2.addEventListener('mousedown',()=>{
    chaussure.classList.toggle('chauf');
    accessoires.classList.remove('acf');
enfant.classList.remove('enff');
femme.classList.remove('femf')
homme.classList.remove('homf')
});

btn3.addEventListener('mousedown',()=>{
    enfant.classList.toggle('enff');
    accessoires.classList.remove('acf');
chaussure.classList.remove('chauf');
femme.classList.remove('femf')
homme.classList.remove('homf')
});

btn4.addEventListener('mousedown',()=>{
    femme.classList.toggle('femf');
    accessoires.classList.remove('acf');
chaussure.classList.remove('chauf');
enfant.classList.remove('enff');
homme.classList.remove('homf')
});

btn5.addEventListener('mousedown',()=>{
  homme.classList.toggle('homf');
  accessoires.classList.remove('acf');
chaussure.classList.remove('chauf');
enfant.classList.remove('enff');
femme.classList.remove('femf')

})