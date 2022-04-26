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

//Imprimir datos que son ingresados por el usuario
 
function datosIngresados(){
    const ingresados = Capturar();
    const ingresoDatos = document.getElementById("datosIngresados");
    ingresoDatos.innerText = "Datos inscritos por el Usuario: " + ingresados + ", ";
    return ingresoDatos; 
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

//Mediana
function calcularMediana(lista){
    lista.sort(function(elemento1, elemento2){
        return elemento1 -elemento2
    });

    const mitadLista1 = parseInt(lista.length / 2);

    //Si la lista es par o impar
    function esPar(numerito){
        if(numerito % 2 === 0){
            return true;
        }else{
            return false;
        };
            
    };
    let mediana;
    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista1 - 1];
        const elemento2 = lista[mitadLista1];

        const elemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

        mediana = elemento1y2;
    }else{
        mediana = lista[mitadLista1];
    };
    return mediana;
}

function mediana(){
    const mediana = calcularMediana(datos);
    const result = document.getElementById("resultFinal");
    result.innerText = "El Valor de la mediana es: " + mediana;
    return mediana;
}