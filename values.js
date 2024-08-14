
//Real para Dólar

document.getElementById('rD').addEventListener('submit', function(event){
    event.preventDefault();

    var valorRD = document.getElementById('valRD').value.replace(',','.');
    var telaResultadoRD = document.getElementById('telaResultadoRD');

    if (isNaN(valorRD) || valorRD === '') {
        telaResultadoRD.style.borderColor = 'red';
        alert('Por favor, insira um número válido.');
        return;
    }

    telaResultadoRD.innerHTML = 'Carregando...';

    fetch('https://open.er-api.com/v6/latest/USD')
        .then(response => response.json())
        .then(data => {
        var exchangeRateRD = data.rates.BRL;
        var resRD = realRD(Number(valorRD), exchangeRateRD);
        telaResultadoRD.style.borderColor = 'green';
        telaResultadoRD.innerHTML = resRD.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        })
        .catch(error => {
            console.error('Error fetching the exchange rate:', error);
            telaResultadoRD.style.borderColor = 'red';
            alert('Erro ao buscar a taxa de câmbio');
        });
});
    function realRD(r, exchangeRateRD){
    return r / exchangeRateRD;
}

//Dólar para Real

document.getElementById('dR').addEventListener('submit', function(event){
    event.preventDefault();

    var valorDR = document.querySelector('#valDR').value.replace(',','.');
    var telaResultadoDR = document.querySelector('#telaResultadoDR');

    if (isNaN(valorDR) || valorDR === '') {
        telaResultadoDR.style.borderColor = 'red';
        alert('Por favor, insira um número válido.');
        return;
    }

    telaResultadoDR.innerHTML = 'Carregando...';

    fetch('https://open.er-api.com/v6/latest/BRL')
        .then(response => response.json())
        .then(data => {
        var exchangeRateDR = data.rates.USD;
        var resDR = dolarDR(Number(valorDR), exchangeRateDR);
        telaResultadoDR.style.borderColor = 'green';
        telaResultadoDR.innerHTML = resDR.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        })
        .catch(error => {
            console.error('Error fetching the exchange rate:', error);
            telaResultadoDR.style.borderColor = 'red';
            alert('Erro ao buscar a taxa de câmbio');
        });
});
    function dolarDR(d, exchangeRateDR){
    return d / exchangeRateDR;
}

//Real para Euro

document.getElementById('rE').addEventListener('submit', function(event){
    event.preventDefault();

    var valorRE = document.querySelector('#valRE').value.replace(',','.');
    var telaResultadoRE = document.querySelector('#telaResultadoRE');

    if(isNaN(valorRE) || valorRE === '' ){
        telaResultadoRE.style.borderColor = 'red';
        alert('Por favor, insira um número válido.');
        return;
    }
    
    telaResultadoRE.innerHTML = 'Carregando...';

    fetch('https://open.er-api.com/v6/latest/EUR')
        .then(response => response.json())
        .then(data => {
        var exchangeRateRE = data.rates.BRL;
        var resRE = dolarRE(Number(valorRE), exchangeRateRE);
        telaResultadoRE.style.borderColor = 'green';
        telaResultadoRE.innerHTML = resRE.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'});
        })
        .catch(error => {
            console.error('Error fetching the exchange rate:', error);
            telaResultadoRE.style.borderColor = 'red';
            alert('Erro ao buscar a taxa de câmbio');
        });
});

function dolarRE(r, exchangeRateRE){
    return r / exchangeRateRE;
}

//Euro para Real


document.getElementById('eR').addEventListener('submit', function(event){
    event.preventDefault();

    var valorER = document.querySelector('#valER').value.replace(',','.');
    var telaResultadoER = document.querySelector('#telaResultadoER');

    if(isNaN(valorER) || valorER === '' ){
        telaResultadoER.style.borderColor = 'red';
        alert('Por favor, insira um número válido.');
        return;
    }
    
    telaResultadoER.innerHTML = 'Carregando...';

    fetch('https://open.er-api.com/v6/latest/BRL')
        .then(response => response.json())
        .then(data => {
        var exchangeRateER = data.rates.EUR;
        var resER = dolarRE(Number(valorER), exchangeRateER);
        telaResultadoER.style.borderColor = 'green';
        telaResultadoER.innerHTML = resER.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        })
        .catch(error => {
            console.error('Error fetching the exchange rate:', error);
            telaResultadoER.style.borderColor = 'red';
            alert('Erro ao buscar a taxa de câmbio');
        });
});

function dolarER(r, exchangeRateER){
    return r / exchangeRateER;
}

function resetV(){
    const valorRD = document.getElementById('valRD');
    const valorDR = document.getElementById('valDR');
    const valorRE = document.getElementById('valRE');
    const valorER = document.getElementById('valER');

    telaResultadoRD.innerHTML = '';
    telaResultadoRD.style.borderColor = 'red';
    valorRD.value = '';
    valorRD.focus();

    telaResultadoDR.innerHTML = '';
    telaResultadoDR.style.borderColor = 'red';
    valorDR.value = '';
    
    telaResultadoRE.innerHTML = '';
    telaResultadoRE.style.borderColor = 'red';
    valorRE.value = '';

    telaResultadoER.innerHTML = '';
    telaResultadoER.style.borderColor = 'red';
    valorER.value = '';
}