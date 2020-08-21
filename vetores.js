let vetor1 = []         // forma "moderna"
let vetor2 = Array()    // forma "tradicional"

//Criação de vetores com valores iniciais
let vetor3 = [2, 4, 6, 8, 10]
let vetor4 = Array('vaca', 'cachorro', 'gato', 'papagaio')

// Inserção de novos valor em um vetor

// Forma 1: push() -> adiciona novos elemntos ao final do vetor
vetor1.push('laranja')
vetor1.push('limão')

console.log(vetor1)

// Forma 2: unshift() -> adiciona novos elementos ao incio do vetor
vetor1.unshift('maça')
console.log(vetor1)

vetor1.unshift('abacaxi')
console.log(vetor1)

// Forma 3: splice()
vetor1.splice(2, 0, 'morango')
console.log(vetor1)

vetor1.splice(1, 0, 'jaca')
console.log(vetor1)

// Remoção de elementos do vetor

// Forma 1: pop()
let x1 = vetor1.pop()
console.log(vetor1, x1)

// Forma 2: shift()
let x2 = vetor1.shift()
console.log(vetor1, x2)

// Forma 3: splice()
let x3 = vetor1.splice(3, 1)
console.log(vetor1, x3)

// subistituição
vetor1.splice(1,1, 'pera')
console.log(vetor1)

// colcoando mais alguns elementos no vetor
vetor1.push('amora', 'jabuticaba')
vetor1.push('pêssego')
vetor1.push('uva')
vetor1.push('abacate')
console.log(vetor1)

console.log('---------------------------')

// Métodos de percurso de vetores

// Forma 1: usando for tradicional
for(let i = 0; i < vetor1.length; i++) {
    console.log(vetor1[i])
}

console.log('---------------------------')

//forma 2: for..of
for(let fruta of vetor1) {
    console.log(fruta)
}