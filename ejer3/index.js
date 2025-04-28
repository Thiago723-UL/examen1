function onClickBtnGuardar() {
    const inNombre = document.getElementById("in_nom")
    const inEdad = document.getElementById("in_edad")
    const slctCarrera = document.getElementById("slct_carrera")
    const mensaje = document.getElementById("men")

    if (inNombre.value == "" || inEdad.value == "" || slctCarrera.value == "") {
        mensaje.textContent = "Error, debe llenar todos los campos."
    } else {
        mensaje.textContent = "Se guardó con éxito."
    }

    
}



function main() {
    const btnGuardar = document.getElementById("btn_guardar")
    btnGuardar.addEventListener("click", onClickBtnGuardar)
    const body = document.getElementById("div_body")

    const mensaje = document.createElement("p")
    mensaje.setAttribute("id", "men")
    body.appendChild(mensaje)
}

main()