/*
    Area do retangulo: b * h
    Area do triangulo: b * h/2
    Area da elipse: (b/2) * (h/2) * pi
*/

let retangulo = {
    base: 2.5,
    altura: 4.5,
    tipo: 'R' //retangulo
}

let triangulo = {
    base: 2.5,
    altura: 4.5,
    tipo: 'T' //triangulo   
}

let elipse = {
    base: 2.5,
    altura: 4.5,
    tipo: 'E' //elipse   
}

const area = forma => {
    switch(forma.tipo) {
        case 'R':
            return forma.base * forma.altura
        case 'T':
            return forma.base * forma.altura / 2
        case 'E':
            return (forma.base/2) * (forma.altura/2) * Math.PI
        default:
            return null // passado um tipo de forma invalido
    }
}

console.log(area(retangulo))
console.log(area(triangulo))
console.log(area(elipse))