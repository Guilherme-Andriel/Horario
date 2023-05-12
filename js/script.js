//--------------------------- Interatividade ---------------------------

function carregar() {
 var msg = window.document.getElementById("text")
 var foto = window.document.getElementById("img")
 var data = new Date() // data da máquina
 var hora = data.getHours() // horário da máquina

 msg.innerHTML = `Agora são ${hora} horas.`

 if(hora >= 0 && hora < 12){
  //BOM DIA!
  foto.src = './img/dia.jpg'
  window.document.body.style.background = "#e2cd9f "
 }
 else if(hora >=12 && hora <= 18){
  //BOA TARDE!
  foto.src = './img/entardecer.jpg'
  window.document.body.style.background = "#b9846f"
 }
 else{
  //BOA NOITE!
  foto.src = './img/anoitecer.jpg'
  window.document.body.style.background = "#515154"



 
 }}

 




