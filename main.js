const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const idparrafo = document.querySelector('#idparrafo');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


console.log({
    h1,
    p,
    parrafo,
    idparrafo
});

h1.innerText = 'Yo soy <br> Ricardo'; //Esta profiedad nos permite modificar el html

console.log(h1.getAttribute('pantalla'));
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo'); //Modificar los atributos en html
console.log(h1.getAttribute('class'));

h1.classList.add('rojo');
h1.classList.remove('verde');

//input.value = "123";

const img = document.createElement('img'); //Podemos crear lo que sea en html
img.setAttribute('src', 'https://www.menudospeques.net/images/tuhijo/ninos-mentirosos.jpg');
idparrafo.appendChild(img); //Con append podemos ingresar una nueva etiqueta dentro de esta.


//Usando eventos en js
//Escuchando eventos de algun elementos en html
function f(){
    suma = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + suma;
    event.preventDefault();
}


//addEventListener
btn.addEventListener('click', f); //Resibe dos argumentos el evento y la accion
//OJO SIN PARENTESIS  Solo el nombre de la funcion, porque la  manda a llamar y la ejecuta.

