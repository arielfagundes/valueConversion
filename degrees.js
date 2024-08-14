const telaResultadoF = document.getElementById('telaResultadoF');
const telaResultadoC = document.getElementById('telaResultadoC');
const telaResultadoK = document.getElementById('telaResultadoK');
const telaResultadoKC = document.getElementById('telaResultadoKC');



/* Pega-se o formulário inteiro "tempCF" e adiciona um EVENTO type="submit", prevenindo que a página atualize cada vez que você envie o formulário*/

        // Evento 1
        document.getElementById('tempCF').addEventListener("submit", function(event) {
            event.preventDefault();

        let degreesCF = Number(document.getElementById('degreesCF').value.replace(',','.'));
        let resultCF = enviarC(degreesCF);
        telaResultadoF.innerText = resultCF.toFixed(1) + " °F";
        telaResultadoF.style.borderColor = ('rgb(24, 245, 16)');
    
        });
        function enviarC(a){
            return (a * 1.8) + 32
        }
        
        // Evento 2
        document.getElementById('tempFC').addEventListener("submit", function(event) {
            event.preventDefault();

        let degreesFC = document.getElementById('degreesFC').value.replace(',','.');
        let resultFC = enviarF(Number(degreesFC));
        telaResultadoC.innerText = resultFC.toFixed(1) + "°C";
        telaResultadoC.style.borderColor = ('rgb(24, 245, 16)');
        });
        function enviarF(b){
            return (b - 32) / 1.8
        }
        
        // Evento 3
        document.getElementById('tempCK').addEventListener("submit", function(event){
            event.preventDefault();

        let degreesCK = document.getElementById('degreesCK').value.replace(',','.');
        let resultK = enviarCK(Number(degreesCK));
        telaResultadoK.innerText = resultK + " K";
        telaResultadoK.style.borderColor = ('rgb(24, 245, 16)');
        })
        function enviarCK(c){
            return c + 273
        }

        // Evento 4
        document.getElementById('tempKC').addEventListener("submit", function(event){
            event.preventDefault();

        let degreesKC = document.getElementById('degreesKC').value.replace(',','.');
        let resultC = enviarKC(Number(degreesKC));
        telaResultadoKC.innerText = resultC + " °C";
        telaResultadoKC.style.borderColor = ('rgb(24, 245, 16)');
        })
        function enviarKC(d){
            return d - 273
        }



        function resetD(){
            const degreesCF = document.getElementById('degreesCF');
            const degreesFC = document.getElementById('degreesFC');
            const degreesCK = document.getElementById('degreesCK');
            const degreesKC = document.getElementById('degreesKC');

            telaResultadoF.innerHTML = '';
            telaResultadoF.style.borderColor = 'red';
            degreesCF.value = '';
            degreesCF.focus();

            telaResultadoC.innerHTML = '';
            telaResultadoC.style.borderColor = 'red';
            degreesFC.value = '';

            telaResultadoK.innerHTML = '';
            telaResultadoK.style.borderColor = 'red';
            degreesCK.value = '';

            telaResultadoKC.innerHTML = '';
            telaResultadoKC.style.borderColor = 'red';
            degreesKC.value = '';
        }