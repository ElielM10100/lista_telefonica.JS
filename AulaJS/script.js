


const lista_telefonica = []

function adicionar_item(item_recebido){

    lista_telefonica.push(item_recebido)
}

for(let i = 0; i<5; i++){

    const nome = prompt("Digite seu nome")
    const telefone = prompt("Digite seu telefone")
    
    const item = {
        nome,
        telefone
    }
    
    adicionar_item(item)
}

console.log(lista_telefonica);