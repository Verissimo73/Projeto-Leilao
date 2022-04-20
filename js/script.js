window.onload=function(){
    var lanceAtual = document.querySelector(".painel-lancamentos"); //pega o número que está como lançamento atual e guarda em uma variável 'lanceAtual'

    var inputDado = document.getElementById('lance');
    var botaoEnviar = document.getElementById('enviarLance');

    botaoEnviar.addEventListener('click', function() {
    // alerta o valor do campo
    alert(inputDado.value);
})
}

