module.exports = class Stack {
    constructor() {
        this.data = [] //armazenamento
    }

    // Inserção
    push(value) {
        this.data.push(value)
    }

    // Remoção
    pop() {
        return this.data.pop()
    }

    // Verificação do topo da pilha
    peek() {
        return this.data[this.data.length-1]
    }

    // Retorna o numero de elementos da pilha
    size() {
        return this.data.length
    }
}