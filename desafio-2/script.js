const students = [
    {
        name: 'João',
        testOne: 10,
        testTwo: 8
    },
    {
        name: 'Maria',
        testOne: 7,
        testTwo: 3
    },
    {
        name: 'Pedro',
        testOne: 8,
        testTwo: 6
    },
    {
        name: 'Ana',
        testOne: 4,
        testTwo: 2
    }
];

const calcMedia = (testOne, testTwo) => {
    return (testOne + testTwo) / 2
}

const printMedia = (student) => {
    const media = calcMedia(student.testOne, student.testTwo)
    const messageMedia = media >= 7 ? `Parabéns ${student.name} você foi aprovado!` : `Que pena, ${student.name} foi foi reprovado!`
    return `${messageMedia} Sua média foi de ${media}`
}

for (let student of students) {
    let mediaMessage = printMedia(student)
    alert(mediaMessage)
}

