window.onload = function () {
    insertNum();
    document.getElementById('label').addEventListener('click', insertNum)
}

function insertNum() {
    do {
        var non_valido = true;
        var numero = prompt('Insert number');
        if (numero == null)
            non_valido = false;
        else
        if (!isNaN(numero) && numero.trim() != '') {
            non_valido = false;
            numero = numero.trim().replace('+', '');
            var prefisso = numero.substring(0, 2)
            numero = numero.substring(2)
            document.getElementById('label').innerHTML = '+' + prefisso + ' ' + numero;
            var phone = prefisso + numero;
        }

        else
            alert('Not valid');
    } while (non_valido)
    
    document.getElementById('btn').addEventListener('click', function(){
        var msg = document.getElementById('msg').value;
        msg = encodeURI(msg)
        window.open('https://api.whatsapp.com/send?phone='+phone+'&text='+msg)
    })
}