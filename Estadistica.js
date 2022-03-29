//guardar datos
const datos = [];

function Capturar(){
    var lstNumero = document.getElementsByClassName("numero");
    let arrayGuardar = [];         
    for (var i = 0; i < lstNumero.length; i++) {    
        arrayGuardar[i] = lstNumero[i].value;
        datos.push(parseInt(arrayGuardar[i], 10));     
    }   
}


// promedio
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(ValorAcumulado = 0, nuevoElemento){
            return ValorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

function calcularPromedio(){
    const media = calcularMediaAritmetica(datos);
    const result = document.getElementById("resultFinal");
    result.innerText = "el promedio de los valores ingresados es de: " + media;
    return media;
}
//Moda
function calcularModa(lista){
    const lista1Count = {};

    lista.map(
        function(elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }else{
                lista1Count[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(lista1Count).sort(
        function(elementoA, elementoB){
        return elementoA[1] - elementoB[1];
        }
    )

    const moda = listaArray[listaArray.length - 1];
    return moda;
}

function moda(){
    const moda = calcularModa(datos);
    const result = document.getElementById("resultFinal");
    result.innerText = "el promedio de los valores ingresados es de: " + moda;
    return moda;
}
