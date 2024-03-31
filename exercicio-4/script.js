// Calculando média de aluno

let student = prompt("Qual o seu nome?")
let assessmentOne = prompt("Qual a primeira nota na prova?")
let assessmentTwo = prompt("Qual a segunda nota na prova?")
let assessmentThree = prompt("Qual a terceira nota na prova?")


let average = (Number(assessmentOne) + Number(assessmentTwo) + Number(assessmentThree)) / 3
let result = average >= 6
average = average.toFixed(2)

if (result) {
    alert(`Parabéns, ${student}! Sua média foi de: ${average}`)
} else if (average <= 1) {
    alert(`Você esta reprovado ${student}! a sua média foi de: ${average}`)
} else {
    alert(`${student}, Você esta em recuperação, sua media foi de: ${average}`)
}
