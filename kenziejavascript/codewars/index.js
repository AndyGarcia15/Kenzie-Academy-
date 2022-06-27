// andy = higiene
let andy = ['sabonete','pasta de dente', 'desodorante','shampoo','escova']
// carlin = alimentação
let carlin = ['carne','arroz','oleo','sal','pimenta']
// pizi = medico
let pizi = ['dorflex','bandagem','algodão','soro','alcool']
// kemps = lazer 
let kemps = ['baralho','dados','bola','video game','droga']
// cada um leva 5 itens 


function suprimentos(higiene,alimento,medico,lazer){
    
    let suprimentos = [higiene,alimento,medico,lazer]

    for(let i = 0; i< suprimentos.length;i++){
        for(let j = 0; j < suprimentos[i].length;j++){
            if(i == 5){
                return console.log(suprimentos)
            }
            else{
                return console.log('ta errado')
            }
        }
            
}

} 


suprimentos(andy,carlin,pizi,kemps)










