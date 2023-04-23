

function adicionar() {
    let number = document.getElementById('txtnum');
    let num = Number(number);

    if (num <= 0 || num > 100) {
        window.alert('Número inválido');
    }
}