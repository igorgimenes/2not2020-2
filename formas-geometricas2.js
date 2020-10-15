class FormaGeometrica {
    constructor(base = 1, altura = 1, tipo = 'R') {

        if(isNaN(base) || base <= 0) {
            throw new Error('A base deve ser numérica e maior que zero')
        }

        if(isNaN(altura) || altura <= 0) {
            throw new Error('A altura deve ser numérica e maior que zero')
        }

        //if(tipo != 'R' && tipo != 'T' && tipo != 'E') {
        if(['R', 'T', 'E'].indexOf(tipo) < 0) {
            throw new Error('O tipo deve ser R, T ou E.')
        }

        this.base = base
        this.altura = altura
        this.tipo = tipo
    }

    area() {
        switch(this.tipo) {
            case 'R':
                return this.base * this.altura
            case 'T':
                return this.base * this.altura / 2
            case 'E':
                return (this.base/2) * (this.altura/2) * Math.PI
            default: // tipo invalido
                return null
        }
    }
}

const retangulo = new FormaGeometrica(4, 6.5, 'R')
const triangulo = new FormaGeometrica(4.2, 6.5, 'T')
const elipse = new FormaGeometrica(4, 6.5, 'E')
const carlos = new FormaGeometrica(4, 6.5, 'E')

console.log(retangulo)
console.log(triangulo)
console.log(elipse)


console.log(carlos.area())