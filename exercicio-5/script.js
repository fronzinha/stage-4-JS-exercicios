/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 4 items, imprima-os, separando por vírgula.
*/


let items = []

for (let item = 0; item < 5; item++) {
    let itemName = prompt("Digite o Item " + (item + 1))

    items[item] = itemName
}

alert(items)