window.onload = function () {
    //Creo letiables para guardar en ellas los eventos registrados
    //Los eventos registrados se obtienen gracias a las funciones: type, keycode y String.fromCharCode
    let eventoType;
    let eventoKeyCode;
    let eventoCharCode;
    let p1, p2, p3, p4;
    let cajon = document.getElementById("caja");

    //En esta letiable letras recojo lo que se escribe en el input del html
    let letras = document.getElementById("dato");

    //Cuando se pulsa una tecla se ejecuta la funcion traducir
    letras.addEventListener("keyup", traducir, false);

    //La funcion traducir:
    function traducir(evento) {
        if (evento.keyCode==8){return};
        let cadena = letras.value;

        if (evento.keyCode<64||evento.keyCode>91){
            cadena=cadena.substring(0,cadena.length-1);
            letras.value=cadena;
            return;
        }

        cadena = cadena.toUpperCase();
        let posicion = cadena.length-1;
        let codigoUnicode = cadena.charCodeAt(posicion);
        let chino = unescape("%u" + codigoUnicode + "e8");
        cadena=cadena.substring(0,posicion)+chino;
        letras.value=cadena;

    }

    function getEvtType(evento) {
        //Guardo en las letiables los eventos registrados
        eventoType = evento.type;
        eventoKeyCode=evento.keyCode;
        eventoCharCode=String.fromCharCode(eventoKeyCode);

        //Los muestro en el HTML creando nodos de texto y agregándoselos 
        //a la section con el id caja que he creado en el index.html
        //lo hago en el javascript para que me muestre el texto por cada tecla que se pulse
        //y no se sobrescriba la informacion
        p1 = document.createElement("p");
        let texto1 = document.createTextNode("----------------------------------------------------");
        p1.appendChild(texto1);
        cajon.appendChild(p1);

        p2 = document.createElement("p");
        let texto2 = document.createTextNode("Tipo de evento: "+ eventoType);
        p2.appendChild(texto2);
        cajon.appendChild(p2);
        
        p3 = document.createElement("p");
        let texto3 = document.createTextNode("Propiedad de KeyCode: "+ eventoKeyCode);
        p3.appendChild(texto3);
        cajon.appendChild(p3);

        p4 = document.createElement("p");
        let texto4 = document.createTextNode("Caracter pulsado: "+ eventoCharCode);
        p4.appendChild(texto4);
        cajon.appendChild(p4);

    }

    // Evento que llama a la funcion getEvtType para escribir los registros cada vez que se pulsa una tecla
    document.addEventListener("keyup", getEvtType, false);


}