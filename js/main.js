const sumar = (n1, n2, n3) => {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        return "No es un numero";
    }
    return n1 + n2 + n3;
}


class Coche {
    constructor() {
        this.nPuertas = 0;
    }

    set setPuertas(nPuertas) {
        this.nPuertas += nPuertas;
    }

    get getPuertas() {
        return this.nPuertas;
    }

}

(() => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.id = "modal";
    modal.innerHTML = `
    <div class="respuesta__caja">
    <h3 class="respuesta__texto">120</h3>
    <a href="#" class="btn--close">X</a>
  </div>`;
    document.querySelector("body").addEventListener("click", (e) => {
        if (e.target.matches("#btnEnviarEJ1")) {
            e.preventDefault();
            //Crear una función con tres parámetros que sean números que se suman entre sí.
            //Llamar a la función en el main y darle valores.
            document.querySelector("body").appendChild(modal);
            document.querySelector(".respuesta__caja").style.animationName = "animarRespuestaCaja";
            document.querySelector(".respuesta__texto").style.animationName = "animarRespuestaTexto";
            const $respuesta__texto = document.querySelector(".respuesta__texto");
            $respuesta__texto.textContent = sumar(document.querySelector(`[name="number1"]`).value,
                document.querySelector(`[name="number2"]`).value, document.querySelector(`[name="number3"]`).value);

        }
        if (e.target.matches("#btnEnviarEJ2")) {
            e.preventDefault();
            //Crear una clase coche.
            //Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.
            //Una función que incremente el número de puertas que tiene el coche.
            //Crear un objeto miCoche en el main y añadirle una puerta.
            //Mostrar el número de puertas que tiene el objeto.
            const coche = new Coche();
            coche.setPuertas = document.querySelector(`[name="number4"]`).value;
            document.querySelector("body").appendChild(modal);
            document.querySelector(".respuesta__caja").style.animationName = "animarRespuestaCaja";
            document.querySelector(".respuesta__texto").style.animationName = "animarRespuestaTexto";
            const $respuesta__texto = document.querySelector(".respuesta__texto");
            $respuesta__texto.textContent = coche.getPuertas;

        }

        if (e.target.matches(".btn--close")) {
            setTimeout(() => {
                document.querySelector(".respuesta__caja").style.animationName = "animarRespuestaCajaCerrar";
                document.querySelector(".respuesta__texto").style.animationName = "animarRespuestaTextoCerrar";
                setTimeout(() => {
                    document.querySelector("body").removeChild(document.querySelector("#modal"));
                }, 2000);
            }, 10);
        }
    });
})();

