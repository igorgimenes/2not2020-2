const Stack = require('./lib/Stack')

let pilha = new Stack()

console.log(pilha)

pilha.push(9)
pilha.push(-8)
pilha.push(0)
pilha.push(7)

console.log(pilha)
console.log('Ultimo elemento:', pilha.peek())
console.log('Tamanho:', pilha.size())