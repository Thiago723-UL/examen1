function onClickBtnSuma() {
    const nro1 = document.getElementById("nro1")
    const nro2 = document.getElementById("nro2")
    const res = document.getElementById("res")

    const resultado = parseInt(nro1.value) + parseInt(nro2.value)
    res.value = resultado
}

function onClickBtnResta() {
    const nro1 = document.getElementById("nro1")
    const nro2 = document.getElementById("nro2")
    const res = document.getElementById("res")

    const resultado = parseInt(nro1.value) - parseInt(nro2.value)
    res.value = resultado
}

function onClickBtnMult() {
    const nro1 = document.getElementById("nro1")
    const nro2 = document.getElementById("nro2")
    const res = document.getElementById("res")

    const resultado = parseInt(nro1.value) * parseInt(nro2.value)
    res.value = resultado
}

function onClickBtnDiv() {
    const nro1 = document.getElementById("nro1")
    const nro2 = document.getElementById("nro2")
    const res = document.getElementById("res")

    const resultado = parseInt(nro1.value) / parseInt(nro2.value)
    res.value = resultado
}


function main() {
    const btnSuma = document.getElementById("btn_suma")
    const btnResta = document.getElementById("btn_resta")
    const btnMult = document.getElementById("btn_mult")
    const btnDiv = document.getElementById("btn_div")

    btnSuma.addEventListener("click", onClickBtnSuma)
    btnResta.addEventListener("click", onClickBtnResta)
    btnMult.addEventListener("click", onClickBtnMult)
    btnDiv.addEventListener("click", onClickBtnDiv)
}

main()