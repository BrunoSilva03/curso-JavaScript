function verificar() {
    var data = new Date();
    var ano = data.getFullYear() //PEGA O ANO ATUAL
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <= 2) {
                //BEBÊ
                img.setAttribute('src', 'fotobebehomem.png')
            } else if (idade >=3 && idade <= 11) {
                //CRIANÇA
                img.setAttribute('src', 'fotocriancahomem.png')
            } else if (idade >=12 && idade <=30) {
                //JOVEM
                img.setAttribute('src', 'fotojovemhomem.png')
            } else if (idade >= 31 && idade <= 59) {
                //ADULTO
                img.setAttribute('src', 'fotohomem.png')
            } else if (idade >= 60) {
                //IDOSO
                img.setAttribute('src', 'fotoidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <= 2) {
                //BEBÊ
                img.setAttribute('src', 'fotobebemulher.png')
            } else if (idade >=3 && idade <= 11) {
                //CRIANÇA
                img.setAttribute('src', 'fotocriancamulher.png')
            } else if (idade >=12 && idade <=30) {
                //JOVEM
                img.setAttribute('src', 'fotojovemmulher.png')
            } else if (idade >= 31 && idade <= 59) {
                //ADULTO
                img.setAttribute('src', 'fotomulher.png')
            } else if (idade >= 60) {
                //IDOSO
                img.setAttribute('src', 'fotoidosa.png')
            }
        }
        
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
    }
}