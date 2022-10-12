//importation de button connection
const button = document.getElementById('btn');
console.log(button)
// fonction global de control
button.addEventListener('click',(e)=>{
// rucuperation des valeur des champs
const infos = {
    nom:document.getElementById('myNom').value,
    prenom:document.getElementById('myPrenom').value,
    address:document.getElementById('myAddress').value,
    numero:document.getElementById('myNumber').value,
    email:document.getElementById('myMail').value,
    password:document.getElementById('myPass').value
}
//control regex NOM et PRENOM
const RegexNM = (valeur) =>{
    return /^[a-zA-Z\s]{2,20}$/.test(valeur);
}
//alert message
const message = (valeur)=>{
    return`${valeur} doit etre composer uniquement par des lettres de 2 a 20 carracteres`;
}
//control regex EMAIL
const regexMail = (valeur)=>{
    return /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(valeur);
}
//control regex MOT DE PASSE
const regexPass = (valeur) =>{
    return  /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){6,8}$/.test(valeur);
}
//regex address
const RegexA = (valeur) => {
  return /^[a-zA-Z0-9\s]{2,20}$/.test(valeur);
}
//regexnumero
 const RegexNu = (valeur) => {
  return /^[0-9]{8}$/.test(valeur);
 }
//controle nom
  if(RegexNM(infos.nom)){
    console.log('Nom correcte');
    e.preventDefault();
  }else{
    console.log(message('Le Nom:'));
    return false;
    e.preventDefault();
  };
  //controlle du prenom
  if(RegexNM(infos.prenom)){
    console.log('Prenom correcte');
    e.preventDefault();
  }else{
    console.log(message('Le Prenom:'));
    return false;
    e.preventDefault();
  };
  //controle de l'address
  if(RegexA(infos.address)){
    console.log('address correcte')
    e.preventDefault();
  }else{
    console.log('entrer bien une address')
    return false;
    e.preventDefault();
  };
  //controle de numero
  if(RegexNu(infos.numero)){
    console.log('numero correct')
    e.preventDefault();
  }else{
    console.log('le numero doit etre de 8 chiffres');
    return false;
    e.preventDefault();
  }
  //controlle email
  if(regexMail(infos.email)){
    console.log('Email correcte');
    e.preventDefault();
  }else{
    console.log('Email incorrecte');
    return false;
    e.preventDefault();
  };
  //controlle de mot de passe
  if(regexPass(infos.password)){
    console.log('Le mot de passe est correcte');
    e.preventDefault();
  }else{
    console.log('Le mot de passe est incorrecte il doit contenir des chiffres et des lettres');
    return false;
    e.preventDefault();
  };
  //controll et envoie dans la base de donnee
  if(infos.nom && infos.prenom && infos.address && infos.numero && infos.email && infos.password){
    const aEnvoyer = infos;
    const myEnv = async () =>{
        try{
          const res = await fetch('http://localhost:3900/auth/signup',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(aEnvoyer)
          })
          if(res.ok){
            const data = await res.json();
          }else{
            console.error('erreur:',res.status)
          }
        }catch(e){
            console.log(e);
        }
    };
    myEnv();
    document.write('Felicitation! votre inscription a ete valable'
      
    );
    document.location.href=""

    
  }else{
    console.log('Veuillez remplir tous les champs');
    return false;
    e.preventDefault();
}
})