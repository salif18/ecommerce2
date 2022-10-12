const signIn = document.querySelector('#btnsI');
console.log(signIn);
signIn.addEventListener('click',(e)=>{
    //recuperation des donnees
    const myDonees ={
        email:document.querySelector('#mail1').value,
        password:document.querySelector('#pass1').value
    };

    //control regex EMAIL
    const regexMail = (valeur)=>{
    return /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(valeur);
    };  

    //control regex MOT DE PASSE
    const regexPass = (valeur) =>{
    return  /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(valeur);
    };
    //verification email
   if(regexMail(myDonees.email)){
        console.log('email valable');
       e.preventDefault();
   }else{
       console.log('email incorrect');
        
       e.preventDefault();
   };

    if(regexPass(myDonees.password)){
        console.log('passeword correct');
        e.preventDefault();
    }else{
        console.log('password incorrect');
       e.preventDefault();
    };
    if(myDonees.email && myDonees.password){
        const doEnv = myDonees;
        const mylog = async () =>{
            try{
              const res = await fetch('http://localhost:2800/api/auth/login',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(doEnv)
              })
              if(res.ok){
                const data = await res.json();
                console.log(data)
              }else{
                console.error('erreur',res.status)
              }
            }catch(e){
                console.log(e)
            }
        };
        mylog();
        console.log('champs remplis');
        e.preventDefault();
    }else{
        console.log('veuillez entrer les champs');
        return false;
        e.preventDefault();
    };
   
})