function onClickBtnMenu() {
    const listOpcDiv = document.getElementById("list_opc_div")

    if (listOpcDiv.style.display == "none") {
        listOpcDiv.style.setProperty("display", "block")
    } else {
        listOpcDiv.style.setProperty("display", "none")
    }
}

function onClickBtnAgregar() {
    const inputOpc = document.getElementById("input_opc")
    const listOpc = document.getElementById("list_opc")
    const li = document.createElement("li")
    li.textContent = inputOpc.value
    console.log(li.textContent)

    listOpc.appendChild(li)

}

function main() {
    const btnMenu = document.getElementById("btn_menu")
    btnMenu.addEventListener("click", onClickBtnMenu)

    const btnAgr = document.getElementById("btn_agr")
    btnAgr.addEventListener("click", onClickBtnAgregar)
}

main()