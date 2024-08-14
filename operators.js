const telaResultadoS = document.getElementById('telaResultadoS');
const telaResultadoD = document.getElementById('telaResultadoD');
const telaResultadoM = document.getElementById('telaResultadoM');
const telaResultadoDiv = document.getElementById('telaResultadoDiv');

//Evento 1
document.getElementById('sum').addEventListener('submit',function(event){
    event.preventDefault();

    let sumN1 = Number(document.getElementById('sN1').value.replace(',','.'));
    let sumN2 = Number(document.getElementById('sN2').value.replace(',','.'));
    let resultS = sum(sumN1, sumN2);
    telaResultadoS.innerText = resultS;
    telaResultadoS.style.borderColor = ('rgb(24, 245, 16)');
    telaResultadoS.style.display = "flex"; 
    telaResultadoS.style.justifyContent = "center";
    telaResultadoS.style.alignItems = "center";
})    
function sum(a, b){
    return a + b
}
// Evento 2
document.getElementById('dif').addEventListener('submit', function(event){
    event.preventDefault();

    let difN1 = Number(document.getElementById('dN1').value.replace(',','.'));
    let difN2 = Number(document.getElementById('dN2').value.replace(',','.'));
    let resultD = dif(difN1, difN2);
    telaResultadoD.innerText = resultD.toFixed(2);
    telaResultadoD.style.borderColor = ('rgb(24, 245, 16)');
    telaResultadoD.style.display = "flex"; 
    telaResultadoD.style.justifyContent = "center";
    telaResultadoD.style.alignItems = "center";
})
function dif(a, b){
    return a - b
}
// Evento 3
document.getElementById('mult').addEventListener('submit', function(event){
    event.preventDefault();

    let mN1 = Number(document.getElementById('mN1').value.replace(',','.'));
    let mN2 = Number(document.getElementById('mN2').value.replace(',','.'));
    let resultM = mult(mN1, mN2);
    
    telaResultadoM.innerText = resultM;
    telaResultadoM.style.borderColor = ('rgb(24, 245, 16)');
    telaResultadoM.style.display = "flex"; 
    telaResultadoM.style.justifyContent = "center";
    telaResultadoM.style.alignItems = "center";
})
function mult(a, b){
    return a * b
}
// Evento 4
document.getElementById('div').addEventListener('submit', function(event){
    event.preventDefault();

    let divN1 = Number(document.getElementById('divN1').value.replace(',','.'));
    let divN2 = Number(document.getElementById('divN2').value.replace(',','.'));
    let resultDiv = div(divN1, divN2);
    
    telaResultadoDiv.innerText = resultDiv.toFixed(5);
    telaResultadoDiv.style.borderColor = ('rgb(24, 245, 16)');
    telaResultadoDiv.style.display = "flex"; 
    telaResultadoDiv.style.justifyContent = "center";
    telaResultadoDiv.style.alignItems = "center";
})
function div(a, b){
    return a / b
}

function resetO(){
    const sN1 = document.getElementById('sN1');
    const sN2 = document.getElementById('sN2');
    sN1.value = '';
    sN1.focus();
    sN2.value = '';
    telaResultadoS.innerHTML = '';
    telaResultadoS.style.borderColor = 'red';

    const dN1 = document.getElementById('dN1');
    const dN2 = document.getElementById('dN2');
    dN1.value = '';
    dN2.value = '';
    telaResultadoD.innerHTML = '';
    telaResultadoD.style.borderColor = 'red';

    const mN1 = document.getElementById('mN1');
    const mN2 = document.getElementById('mN2');
    mN1.value = '';
    mN2.value = '';
    telaResultadoM.innerHTML = '';
    telaResultadoM.style.borderColor = 'red';

    const divN1 = document.getElementById('divN1');
    const divN2 = document.getElementById('divN2');
    divN1.value = '';
    divN2.value = '';
    telaResultadoDiv.innerHTML = '';
    telaResultadoDiv.style.borderColor = 'red';
}