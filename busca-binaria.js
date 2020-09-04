// Pré-requisito para a busca binária: o conjunto de dados
// PRECISA estar ordenado pelo critério de busca
let comp = 0
function buscaBinaria(lista, valorBusca) {
    let inicio = 0
    let fim = lista.length - 1
    
    while(fim >= inicio) {
        // Math.floor(): retira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)
        // Verifica se o valor na posição média é o valor de busca
        if(valorBusca === lista[meio]) {
            comp++
            return meio
        }
        else if(valorBusca < lista[meio]) {
            comp += 2
            fim = meio - 1
        }
        else {  // valorBusca > lista[meio]
            comp += 2
            inicio = meio + 1
        }
    }
    return -1       // Valor não encontrado
}
let vetorNomes = require('./dados/vetor-nomes')
console.time('IGOR')
console.log(buscaBinaria(vetorNomes, 'IGOR'))
console.timeEnd('IGOR')
console.log('Comparações: ', comp)

console.log('--------------------------------------------')

comp = 0
console.time('YASUO')
console.log(buscaBinaria(vetorNomes, 'YASUO'))
console.timeEnd('YASUO')
console.log('Comparações: ', comp)