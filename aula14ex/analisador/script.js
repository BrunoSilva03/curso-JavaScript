

function adicionar() {
    let number = window.document.getElementById('txtnum');
    let num = Number(number);

    if (num <= 0 || num > 100) {
        window.alert('Número inválido');
    }
} //só pra falar que fiz alguma coisa