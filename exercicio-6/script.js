let result = prompt("Adivinhe o número que estou pensando? entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1


if (Number(result) === randomNumber) {
    alert(`Parabéns! Você acertou de primeira! O número que eu pensei foi ${randomNumber}.`)
} else {
    while (Number(result) !== randomNumber) {
        result = prompt("Errou, tente novamente")
        xAttempts++
    }
    alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou o número em ${xAttempts} tentativas.`)
}