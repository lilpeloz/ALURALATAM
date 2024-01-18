//alert('Hola Mundo'); //variable alerta//
let numeroMaxPos = 100;
let NumeroSecreto = Math.floor(Math.random()*numeroMaxPos)+1;
let NumeroUsuario;
let Intentos = 1;
//let PalabraVeces = "vez";
let MaximosIntentos = 3;

console.log(NumeroSecreto);

while(NumeroUsuario != NumeroSecreto){ //while es mientras, != diferente

    let NumeroUsuario = parseInt(prompt(`me indicas un numero del 1 al ${numeroMaxPos} por favor`)); //orden del codigo 1.variable 2.nombre de la variable 3.= es asignacion//

    console.log(typeof(NumeroUsuario)); // sin comillas en console.log es una espacio de memoria osea busca variables//
    /* este codigo realiza la comparación */
    if (NumeroUsuario == NumeroSecreto){ //if es si y es una condición, = es comparacion, else si no
        // se cumple la funcion
        alert(`acertaste, el numero es: ${NumeroUsuario} lo hiciste en ${Intentos} ${Intentos == 1 ?'vez': 'veces'}`); //comillas invertidas ` se hace con CTRL + ALT + } ? comparacion, vez (si no): veces
    } else {
        if (NumeroUsuario > NumeroSecreto){
            alert("el numero secreto es menor");
        } else {
            alert("el numero secreto es mayor");
        }
        //incrementa la contador cuando no acierta
        //Intentos = Intentos + 1;
        //Intentos += 1;
       Intentos++; //mas utlizada
        PalabraVeces = "veces";
        if (Intentos > MaximosIntentos) {
            alert(`llegaste al numero maximo de ${MaximosIntentos} intentos`);
            break;
        }
        // no se cumple la funcion
        // alert('lo siento no es el numero');
    }
}

