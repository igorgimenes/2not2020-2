/*
Função de 




*/
function selectionSort(vetor, fnComp) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0

    // Função que encontra o menor valor em um segmento de vetor (sub-vetor)
    // A função deve retornar a posição do menor valor encontrado
    function encontrarMenor(vetor, inicio) {
        let posMenor = inicio
        for(let i = inicio + 1; i < vetor.length; i++) {
            //if(vetor[i] < vetor[posMenor]) posMenor = i
            if(! fnComp(vetor[i], vetor[posMenor])) posMenor = i //inversão usando not (!)
            comparacoes++
        }
        return posMenor
    }

    for(i = 0; i < vetor.length - 1; i++) {
        passadas++
        // Buscasse o menor valor no restante do vetor
        posMenor = encontrarMenor(vetor, i + 1)

        //caso o valor encontrado seja menor que o valor atual,
        // procede-se a troca
        comparacoes++
        //if(vetor[posMenor] < vetor[i]) {
        if(fnComp(vetor[i], vetor[posMenor])) { //inversão por ordem
            // Permuta de valores usando desestruturação 
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
            totalTrocas++
        }
    }
    console.log({passadas, comparacoes, totalTrocas})
}

/*
const nums = [56, 78, 44, 23, 99, 14, 60, 37, 6, 82, 31, 65]

console.time('nums')
selectionSort(nums)
console.timeEnd('nums')
console.log(nums)

console.log('-------------------------------')
*/

let candidatos = require('./dados/candidatos-2018')

console.time('Teste candidatos')
selectionSort(candidatos, (x, y) => x.NM_CANDIDATO > y.NM_CANDIDATO)
console.timeEnd('Teste candidatos')
// medindo a memório utilizada pelo programa
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
// heapUsed dá memoria em bytes
console.log(candidatos)
console.log('Memória utilizada (MB): ', memoria)