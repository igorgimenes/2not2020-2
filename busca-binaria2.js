// Pré-requisito para a busca ninária: o conjunto de dados
// PRECISA estar ordenada pelo critério de busca
let comp = 0 // Variavel de comparação
function buscaBinaria(lista, valorBusca, fnComp) {
    let inicio = 0
    let fim = lista.length - 1
    
    while(fim >= inicio) {
        // Math.floor(): retira as casas decimais de um número
        let meio = Math.floor((fim+inicio)/2)

        let res = fnComp(lista[meio], valorBusca)

        // Verificar se o valor na posição média é o valor de busca
        if(res == 0) {
            comp++
            return meio
        }
        else if (res < 0) {
            comp += 2
            fim = meio - 1
        }
        else { // res > 0
            comp += 2
            inicio = meio + 1
        }
    }
    return -1

}

function comparaNome(obj, valorBusca) {
        // Os dois valores são iguais
        if(valorBusca === obj.first_name) return 0 
        // Um número negativo para indicar que primeiro é menor que o segudno
        else if(valorBusca < obj.first_name) return -1 
        // Um número positivo para indicar que o primeiro é maior que o segundo
        else return 1 // valorBusca > obj.first_name

}

let listaNomes = require('./dados/lista-nomes')

console.time('IGOR')
console.log(buscaBinaria(listaNomes, 'IGOR', comparaNome))
console.timeEnd('IGOR')
console.log('Comparações: ', comp)

console.log('--------------------------------------------')

comp = 0
console.time('YASUO')
console.log(buscaBinaria(vetorNomes, 'YASUO', comparaNome))
console.timeEnd('YASUO')
console.log('Comparações: ', comp)