const button = document.querySelector('#myBtn')
button.addEventListener('click',()=>{

    const produit ={
        titre:document.querySelector('#myTitre').value,
        description:document.querySelector('#myDesc').value,
        prix:document.querySelector('#myPrix').value,
        imageUrl:document.querySelector('#myFile').value
    }

    if( produit.titre && produit.description && produit.prix && produit.imageUrl){
        const envFile = async () =>{
            try{
           const res = await fetch('produits',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(produit)
           })
        }catch(e){
            console.log(e)
        }
        };
        envFile();
    }else{
        console.log('veuiller bien remplir les champs')
    }
})