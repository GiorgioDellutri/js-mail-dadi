const utente = document.getElementById ('numero-utente');
const pc = document.getElementById('numero-pc');
const button = document.querySelector('a.btn');
const risultato = document.getElementById('risultato');

button.addEventListener ('click', function(){
    
    let numeroUtente = Math.floor(Math.random()*6+1);
    let numeroPc = Math.floor(Math.random()*8+1);
    
    utente.innerHTML = numeroUtente;
    pc.innerHTML = numeroPc;
    
    console.log(numeroUtente);
    console.log(numeroPc);

    if ( numeroUtente < numeroPc){
        console.log('pc ha vinto');
        risultato.innerHTML = 'Ha vinto il computer';
    } else if ( numeroUtente > numeroPc){
        console.log('utente ha vinto')
        risultato.innerHTML = 'Hai vinto tu';
    } else if(numeroUtente === numeroPc){ 
        console.log('parità');
        risultato.innerHTML = 'Parità';
    }
})


