
const form = document.querySelector(".formulário-fale-conosco")
const mascara= document.querySelector(".mascara-formulario")



function mostrarForm() {
    form.style.left="50%"
    form.style.transform="translateX(-50%)"
    mascara.style.visibility="visible"
    console.log("mascara")
}

function ocultarForm() {
    form.style.left="-300px"
    form.style.transform="translateX(0)"
    mascara.style.visibility="hidden"
}