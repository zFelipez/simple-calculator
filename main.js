 function execution(){

    let elms =document.querySelectorAll('.element');;
    let sysScreen=document.querySelector('.sys-screen');
    sysScreen.innerHTML= sysScreen.innerHTML.replace(/\s/g,'')
     function recebe( event){
       
        const newtext= event.target.innerHTML;
        
        if (sysScreen.innerHTML.length <= 50){
            
           if (!newtext.includes("=")){
            sysScreen.innerHTML += ` ${newtext}`}
        }
        if( newtext.includes("=")){
         let varConta= sysScreen.innerHTML.replace(/\s/g,'');
         varConta = eval(varConta);
         varConta= String(varConta);
         
           if (varConta.length >= 15){
            varConta=varConta.slice(0,15);
            sysScreen.innerHTML = `${varConta} >= 15 decimal... `;
           } else{
            sysScreen.innerHTML = `${varConta}`; 

           }
         } 

        if(newtext.includes('C')){
         sysScreen.innerHTML = ``;
        }
        console.log(sysScreen.innerHTML);
       
     };
     

   elms.forEach(elm => {
      elm.addEventListener('click', recebe);
  });


 };


execution();
 
