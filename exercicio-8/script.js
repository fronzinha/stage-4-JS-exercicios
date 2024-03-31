const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 190,
    },
    {
        name: "Alexandra",
        age: 27,
        weight: 70,
        height: 170,
    },
    {
        name: "Carlos",
        age: 42,
        weight: 90,
        height: 180,
    },
]

let patientsNames = []

for (let patient of patients) {
    patientsNames.push(patient.name)
}

alert(patientsNames)

/*

Desafio mostrar o seu nome, idade, altura e peso

alert(`Nome: ${patients[0].name}
Idade: ${patients[0].age} Anos
Altura: ${patients[0].weight} kg
Peso: ${patients[0].height}cm`)

*/