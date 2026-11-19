/*  1. Escribir un programa que genere dos numeros aleatorios y que escriba en consola que numeros se generaron
    Ademas el programa debera señalar si los numeros son iguales, y en caso deque no lo sean, mostrara cual es
    el mayor. */
function ejercicio1() {
    console.log("-- Ejercicio 1 --");
    
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    
    console.log("Numero 1: " + x);
    console.log("Numero 2: " + y);
    
    if(x==y) {
        console.log(x + y + " son iguales");
    } else if(x > y) {
        console.log(x + " es mayor que " + y);
    } else {
        console.log(y + " es mayor que " + x);
    }
    
}

/*  2. Elabora un programa que genere un numero aleatorio entre el numero 1 y el 10 y despues escriba la tabla de
    multiplicar del numero generado*/
function ejercicio2() {
    console.log("-- Ejercicio 2 --");
    
    const x = Math.floor(Math.random() * (10 - 1) + 1);
    console.log("Numero asignado: " + x);
    
    for(let i = 0; i < 10; i++) {
        let mul = x*i;
        console.log(x + "x" + i + " = " + mul);
    }
}

/*  3. Escribe un programa que solicite 10 numeros entre el 1 y el 100 y determine cuantos de esos numeros son
    pares y cuantos son impares*/
function ejercicio3() {
    console.log("-- Ejercicio 3 --");
    let contPar=0;
    let contImpar=0;
    
    for(let i = 1; i < 11; i++) {
        let numero = prompt("Dame el numero " + i + ";");
        numero = parseInt(numero) || 0;
        if(numero % 2 == 0) {
            contPar++;
        } else {
            contImpar++;
        }
    }
    
    console.log("Total de numeros pares: " + contPar);
    console.log("Total de numeros impares: " + contImpar);
}

ejercicio1();
ejercicio2();
ejercicio3();