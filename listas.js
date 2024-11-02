//comparar 3 numeros
/*que un numero es mayor que esos 3 numeros, si hay numeros repetidos imprima en consola el numero repetido*/

/*
lista1 = [1,3,5,7,9];
lista2 = [2,4,6,8,0];

//Se ordenan ambos arreglos
lista1.sort();
lista2.sort();

// y se realiza la comparación de cada elemento
lista1.length>lista2.length&&lista1.every(function(v,i) {return v === lista2[i]});
console.log(lista1[0]);
*/

lista1 = [1,3,5,7,9];
lista2 = [2,4,6,8,0];

numeroMayor=lista1[0];

for(let i-0;i<lista1.length;i++){
    if (lista1[i] > numeroMayor){
        numeroMayor = lista1[i];
    }
    console.log("Numero mayor de lista1 es:", numeroMayor);
}