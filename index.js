function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num
}

function clean () {
    document.getElementById('resultado').innerHTML = '';
}

function back () {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular () {
    var res = document.getElementById('resultado').innerHTML;
    if(res) {
        document.getElementById('resultado').innerHTML = eval(res); //eval vai fazer o calculo automaticamente
    }
    else {
        document.getElementById('resultado').innerHTML = 'Nada...'
    }
}

