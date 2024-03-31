const numberOne = Number(prompt("Digite o primeiro número"))
const numberTwo = Number(prompt("Digite o segundo número"))

// Validações
// Verificar se o número e par ou ímpar
const numberPar = (numberOne, numberTwo) => {
    return numberOne % 2 === 0 && numberTwo % 2 === 0;
}

const numberParValidation = numberPar(numberOne, numberTwo) ? 'É par' : 'É impar'

// Verificar se o número inserido são iguas

const insertNumber = (numberOne, numberTwo) => {
    return numberOne === numberTwo
}

const insertNumberValidation = insertNumber(numberOne, numberTwo) ? 'O Número inserido são iguais' : 'O número inserido são diferentes'

// Operaçõs

const sum = numberOne + numberTwo
const subtracao = numberOne - numberTwo
const multiplicacao = numberOne * numberTwo
const divisao = numberOne / numberTwo
const restDivisao = numberOne % numberTwo

// Resultados

alert(`A somatoria dos dois número é: ${sum}`)
alert(`A subtração dos dois número é: ${subtracao}`)
alert(`A multiplicação dos dois números é: ${multiplicacao}`)
alert(`A divisão dos dois números é: ${divisao}`)
alert(`O Resto da divisão é: ${restDivisao}`)
alert(numberParValidation)
alert(insertNumberValidation)