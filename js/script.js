
let numeroUtente = Math.floor(Math.random()*6+1);
let numeroPc = Math.floor(Math.random()*8+1);


console.log(numeroUtente);
console.log(numeroPc);

if ( numeroUtente < numeroPc){
    console.log('pc ha vinto')
} else if ( numeroUtente > numeroPc){
    console.log('utente ha vinto')
} else if(numeroUtente === numeroPc){ 
    console.log('parità')
}
