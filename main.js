const btnStart = document.getElementById("btnStart");
const campoLetras = document.querySelector(".letraUsuario");
const letrasGuion = document.querySelector(".letras-guion p");
const btnRecargar = document.querySelector(".btnReload");
const txtLetra = document.querySelector(".txtLetra");
const btnCheck = document.querySelector(".btnCheck");
const partesDelMuneco = document.querySelectorAll(".body-part");
const resultado = document.getElementById("resultado");

const setDePalabras = ["CAMALEON","FUTBOL","LUZ","LOBO","CONTENEDOR"];
let cantidadGuiones = [];
let palabraAdivinar = "";
let palabraParcial;
let fallos = 0;


btnStart.addEventListener('click', (e)=>{
	e.preventDefault();
	ocultarPartesDelInicio();
	palabraAleatoria();
	numeroDeGuiones();
	letrasGuion.innerHTML = palabraParcial;
})

const ocultarPartesDelInicio = () =>{
	for (x of partesDelMuneco) {
		x.style.display = "none";
	}
	btnStart.style.display = 'none';
	letrasGuion.style.display = "block";
	campoLetras.style.display = 'block';
	btnRecargar.style.display = "block";
}


const palabraAleatoria = () =>{
	let numAleatorio = Math.floor(Math.random()*setDePalabras.length);
	palabraAdivinar = setDePalabras[numAleatorio];
}

const numeroDeGuiones = () =>{
	for(let i = 0; i <  palabraAdivinar.length; i++){
		cantidadGuiones.push("_ ");
	}
	palabraParcial = cantidadGuiones.join("");
}

btnRecargar.addEventListener("click", (e)=>{
	e.preventDefault();
	location.reload();
})

btnCheck.addEventListener("click", (e)=>{
	e.preventDefault();
	verificarLetra();
		
})
const verificarLetra = () =>{
	let letraDigitada = (txtLetra.value).toUpperCase();
	if (letraDigitada === "") {
		console.log("eso es vacio")
	}else{
		if (palabraAdivinar.includes(letraDigitada)) {

			for (let i = 0; i <= palabraAdivinar.length; i++) {
				if (palabraAdivinar[i] === letraDigitada) {
					cantidadGuiones[i] = letraDigitada;
				} 
			}
		}else {
			fallos++;
		}
	}

	fallosUsuario();

	palabraParcial = cantidadGuiones.join(" ");
	letrasGuion.innerHTML = palabraParcial;
	txtLetra.value = "";

	if (!palabraParcial.includes("_")) {
		txtLetra.disabled = "true";
		resultado.textContent = "¡Wow que bueno eres, has adivinado 😎!";
		resultado.className = "winner";
	}
}


const fallosUsuario = () =>{
	switch (fallos) {
		case 1:
			partesDelMuneco[0].style.display = "block";
			break;
		case 2:
			partesDelMuneco[1].style.display = "block";
			break;
		case 3:
			partesDelMuneco[2].style.display = "block";
			break;
		case 4:
			partesDelMuneco[3].style.display = "block";
			break;
		case 5:
			partesDelMuneco[4].style.display = "block";
			break;
		case 6:
			partesDelMuneco[5].style.display = "block";
			partesDelMuneco[6].style.display = "block";
			partesDelMuneco[7].style.display = "block";
			txtLetra.disabled = "true";
			resultado.textContent = "¡Has perdido 😵!";
			resultado.className = "loser";
			break;
	}

}