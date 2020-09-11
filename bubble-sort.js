/*
    Algoritimo de ordenação Bubble Sort

    Estratégia:
    Percorrer o veotor de dados, comparando elementos adjacentes
    e promovendo a troca quando o sucessor é maior que o antecessor.

    O percurso no vetor é feito tantas vezes quando necessário, até
    que nenhuma troca seja efetuada no percurso.
*/

function bubbleSort(vetor) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    let trocas
    do {
        passadas++
        trocas = 0
        //Percurso do vetor até a penúltima posição (length - 2)
        for (let i = 0; i <= vetor.length - 2; i++) {
            comparacoes++
            if(vetor[i] > vetor[i + 1]) {
                // Fazendo troca por desestruturação de vetor
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
                totalTrocas++
            }
        }
    } while(trocas > 0)
    // Exibindo as estatísticas 
    console.log({passadas, comparacoes, totalTrocas})
}

let nums = [58, 16, 33, 82, 4, 47, 25, 71, 96, 60, 41, 89]

console.time('Teste 1')
bubbleSort(nums)
console.timeEnd('Teste 1')

console.log(nums)

console.log('----------------------------------------')

let empresas = require('./dados/15-mil-empresas')

console.time('Teste empresas')
bubbleSort(empresas)
console.timeEnd('Teste empresas')

console.log(empresas)

console.log('----------------------------------------')

let nomes = require('./dados/100-mil-nomes')

console.time('Teste nomes')
bubbleSort(nomes)
console.timeEnd('Teste nomes')

console.log(nomes)