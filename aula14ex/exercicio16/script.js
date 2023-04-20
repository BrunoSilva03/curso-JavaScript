var inicio = window.document.getElementById('txtinicio');
var fim = window.document.getElementById('txtfim');
var passo = window.document.getElementById('txtpasso');
var res = window.document.querySelector('div#res');



function contar(inicio, fim, passo) {
    if(passo <= 0) {
        alert('Valor inválido, considerando passo = 1.');
        passo = 1;

        for(i = inicio; i < fim; i + passo) {
            res.innerHTML = `${i}  + `;
        }
        res.innerHTML = ' = Fim';
    }
}