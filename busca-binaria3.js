// Pré-requisito para a busca ninária: o conjunto de dados
// PRECISA estar ordenada pelo critério de busca
let comp = 0 // Variavel de comparação

// Implementação recursiva

// Parametros inicio e fim são opcionais. Caso a função seja chamada sem expecificá-los,
// eles assumiram os valores indicados
function buscaBinaria(lista, valorBusca, fnComp, inicio = 0, fim = lista.length - 1) {

    if(fim >= inicio) {
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
            //fim = meio - 1
            return buscaBinaria(lista, valorBusca, fnComp, inicio, meio - 1)
        }
        else { // res > 0
            comp += 2
            //inicio = meio + 1
            return buscaBinaria(lista, valorBusca, fnComp, meio + 1, fim)
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

let nums = [4, 16, 22, 29, 35, 44, 52, 58, 66, 71, 80, 88, 94]

console.log(buscaBinaria(nums, 66, (elPos, busca) => {
    if(busca === elPos) return 0
    else if (busca < elPos) return -1
    else return 1
}, 0, 12))

// Termina execução sem paasar pelas linhas abaixo
// process.exit(0)

let listaNomes = require('./dados/lista-nomes')

console.time('IGOR')
console.log(buscaBinaria(listaNomes, 'IGOR', comparaNome))
console.timeEnd('IGOR')
console.log('Comparações: ', comp)

console.log('--------------------------------------------')

comp = 0
console.time('ENEDINO')
console.log(buscaBinaria(listaNomes, 'ENEDINO', (obj, busca) => {
    if(busca === obj.first_name) return 0
    else if (busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('ENEDINO')
console.log('Comparações: ', comp)