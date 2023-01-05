//juego de adivinar un numero del 0 al 9

//let a = prompt ('Ingrese un numero del 0 al 9');

function adivinar(){
    let b = Math.round(Math.random()*10);
    if (a == b){
        console.log('Adivinaste el numero')
    }else{console.log('una pena, sera en otra oportunidad')};
}

/* juego piedra papel o tijera
const piedra = 1;
const papel = 2;
const tijera = 3;
*/

function sub(){
    const player1 = document.getElementById("player").value;

    var numero= Math.random() * 2;
    var numero_redondeado = Math.round(numero);
    const robot = numero_redondeado + 1;
   
    let opc1 = document.getElementById("opc").value;
    
    if (((opc1 == 1 ) && (robot == 1)) || ((opc1 == 2 ) && (robot == 2)) ||((opc1 == 3 ) && (robot == 3))){
        window.alert ("hay empate!!");
    }else if ((opc1 == 1 ) && (robot == 2)){
        window.alert("Papel envuelve a piedra! gana Robot " );
    }else if ((opc1 == 1 ) && (robot == 3)){
        window.alert("piedra rompe la tijera! gana: " + player1);
    }else if ((opc1 == 2 ) && (robot == 1)){
        window.alert("Papel envuelve a piedra! gana: " + player1);
    }else if ((opc1 == 2 ) && (robot == 3)){
        window.alert("Tijera corta papel! gana Robot " );
    }else if ((opc1 == 3 ) && (robot == 1)){
        window.alert("Piedra rompe a la tijera! gana Robot");
    }else if ((opc1 == 3 ) && (robot == 2)){
        window.alert("Tijera corta papel! gana: " + player1 );
    }else {window.alert ("ingreso un valor NO valido")};
    
}
