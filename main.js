const arraySpesa = ['banana', 'fragola', 'mandorla', 'anguria', 'kiwi', 'mango'];

let lista = document.getElementById('lista');

let contatore = 0;
while (contatore < arraySpesa.length) {
    console.log(arraySpesa[contatore]);

    let itemSpesa = document.createElement(`li`);
    itemSpesa.append(arraySpesa[contatore]);
    lista.append(itemSpesa);

    contatore++;
}

