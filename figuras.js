// Código del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert("El perimetro del cuadrado es: " + perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert("El perimetro del Area es: " + area + "cm^2");
}

// Código Triangulo

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Aquí interactuamos con el HTML

function calcularPerimetroTriangulo(){
  const input1 = document.getElementById("inputlado1");
  const value1 = Number(input1.value);
  const input2 = document.getElementById("inputlado2");
  const value2 = Number(input2.value);
  const base = document.getElementById("inputbase");
  const value3 = Number(base.value);
  const perimetro = perimetroTriangulo(value1,value2,value3);
  alert("El perimetro del triangulo es: " + perimetro);
}
function calcularAreaTriangulo(){
  const input1 = document.getElementById("inputlado1");
  const value1 = Number(input1.value);
  const input2 = document.getElementById("inputlado2");
  const value2 = Number(input2.value);
  const base = document.getElementById("inputbase");
  const value3 = Number(base.value);
  const area = areaTriangulo(value1,value2,value3);
  alert("El area del triangulo es: " + area);
}

// Código Circulo
const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2; 
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio); 
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

// Aquí interactuamos con el HTML

function calcularPerimetroCirculo(){
  const input = document.getElementById("inputradio");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  alert("El perimetro del circulo es: " + perimetro);
}
function calcularAreaCirculo(){
  const input = document.getElementById("inputradio");
  const value = input.value;
  const area = areaCirculo(value);
  alert("El area del circulo es: " + area);
}