
function calcularMediaAritmetica(lista) {

    const sumalista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento; 
        }
    );
    const promediolista = sumalista / lista.length;
        return promediolista;
}

function calcularMediaA() {
    const input = document.getElementById("inputpromedio");
    const value = input.value;
  
    const promedio = calcularMediaAritmetica(value);

    const resultP = document.getElementById("resutaldoP");
    resultP.innerText = "La media Aritmetica es de : " + promedio;
  }
