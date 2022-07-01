function  calculateAge(nascimento,ano) {
    
//https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript'



    if( nascimento < ano && ano - nascimento != 1 ){
        
        return `You are ${ano - nascimento} years old.`
    }


    if(ano - nascimento == 1){
     
        `You are ${ano - nascimento} year old.`
    }


    else if(nascimento == ano){
        return 'You were born this very year!'
    }


    else{
        
        return `You will be born in ${nascimento - ano} years.`
    }
    
    }


    function  calculateAge(nascimento,ano) {
        let resultado = ano - nascimento;
      
        if( nascimento < ano && resultado != 1 ){
          
            resultado = ano - nascimento
            return `You are ${resultado} years old.`
        }
        if(resultado == 1){
          
            resultado = ano - nascimento
            `You are ${resultado} year old.`
        }
        else if(nascimento == ano){
            return 'You were born this very year!'
        }
        else{
            resultado = nascimento - ano
            return `You will be born in ${resultado} years.`
        }
        
        }
