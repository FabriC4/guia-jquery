
/*Actividad 2.*/
/*let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let p_ = $("#Primer_Parrafo")
    p_.click(obtener_parrafo)
}


function obtener_parrafo() {
    alert("click en parrafo 1");
}*/

/*Actividad 3.*/
/*let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("#fila1");
  x.click(presionFila1)
  x = $("#fila2");
  x.click(presionFila2)
}

function presionFila1() {
  let x = $("#fila1");
  x.css("color", "#ff0000");
  x.css("background-color", "#ffff00");
  x.css("font-family", "Courier");
}

function presionFila2() {
  let x = $("#fila2");
  x.css("color", "#ffff00");
  x.css("background-color", "#ff0000");
  x.css("font-family", "Arial");
}*/

/*Actividad 4*/
/*let x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  let x=$("#list li");
  x.click(ocultarFila);
}

function ocultarFila()
{
  let x=$(this);
  x.hide();
}*/

/*Actividad 5*/
/*let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("#tabla1 tr");
  x.click(presionTabla)
}

function presionTabla() {
  let x = $("#tabla1 tr");
  x.css("color", "#ff0000");
  x.css("background-color", "#ffff00");
  x.css("font-family", "Courier");
}
*/

/*Actividad 6*/
/*let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x1 = $("#boton1");
  x1.click(cambiarTamaño1);
  let x2 = $("#boton2");
  x2.click(cambiarTamaño2);
  let x3 = $("#boton3");
  x3.click(cambiarTamaño3);
}

function cambiarTamaño1() {
  let x = $(".descripcion1");
  x.css("font-size", "20px");
}

function cambiarTamaño2() {
  let x = $(".descripcion2");
  x.css("font-size", "22px");
}

function cambiarTamaño3() {
  let x = $(".descripcion3");
  x.css("font-size", "24px");
}*/

/*Actividad 7*/
/*let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("#boton1");
  x.click(modificarDatosTabla);
}

function modificarDatosTabla() {
  let x = $("#tabla1 td");
  x.text("-");
}*/

/*Actividad 8*/
/*let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x1 = $("#boton1");
  x1.click(enlace1);
  let x2 = $("#boton2");
  x2.click(enlace2);
  let x3 = $("#boton3");
  x3.click(enlace3);
}

function enlace1() {
  let x = $("#enlace");
  x.attr("href","https://chat.openai.com/");
}

function enlace2() {
  let x = $("#enlace");
  x.attr("href","https://missing11.com/");
}

function enlace3() {
  let x = $("#enlace");
  x.attr("href","https://onefootball.com/es/inicio");
}
*/

/*Actividad 9*/
/*let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x1 = $("#asociar");
  x1.click(asociarClase);
  x2 = $("#desasociar");
  x2.click(desasociarClase);
}

function asociarClase() {
  let thead= $("thead");
  thead.addClass("theadStyle");

  let tbody= $("tbody");
  tbody.addClass("tbodyStyle");
}

function desasociarClase() {
  let thead = $("thead");
  thead.removeClass("theadStyle");

  let tbody= $("tbody");
  tbody.removeClass("tbodyStyle");
}*/

/*Actividad 10*/
/*let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x1 = $("#alertaCabecera");
  x1.click(presionBoton1);
  x2 = $("#alertaCuerpo");
  x2.click(presionBoton2);
}

function presionBoton1() {
  let contenidoHead = $("head").html();
  alert("Contenido del Head " + contenidoHead);
}

function presionBoton2() {
  let contenidoBody = $("body").html();
  alert("Contenido del Body " + contenidoBody);
}*/