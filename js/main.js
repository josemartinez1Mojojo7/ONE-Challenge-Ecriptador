
function encriptar(event) {
  event.preventDefault()
  let txtPrincipal = document.getElementById("txtPrimary").value
  let txtNuevo=""
  for (let n = 0; n < txtPrincipal.length; n++) {
    if (txtPrincipal[n]==="a") {
      txtNuevo +="ai"
    } else if (txtPrincipal[n]==="e"){
      txtNuevo +="enter"
    } else if (txtPrincipal[n]==="i"){
      txtNuevo +="imes"
    } else if (txtPrincipal[n]==="o"){
      txtNuevo +="ober"
    } else if (txtPrincipal[n]==="u"){
      txtNuevo +="ufat"
    } else {
      txtNuevo +=txtPrincipal[n]
    }
  }
  document.getElementById("txtSecondary").value = txtNuevo
}
function desencriptar(event) {
  event.preventDefault()
  let txtPrincipal = document.getElementById("txtPrimary").value
  let txtNuevo=""
  for (let n = 0; n < txtPrincipal.length; n++) {
    if (txtPrincipal[n]==="a" && txtPrincipal[n+1]==="i") {
      txtNuevo +="a"
      n+=1
    } else if (txtPrincipal[n]==="e" && txtPrincipal[n+1]==="n" && txtPrincipal[n+2]==="t" && txtPrincipal[n+3]==="e" && txtPrincipal[n+4]==="r"){
      txtNuevo +="e"
      n+=4
    } else if (txtPrincipal[n]==="i" && txtPrincipal[n+1]==="m" && txtPrincipal[n+2]==="e" && txtPrincipal[n+3]==="s"){
      txtNuevo +="i"
      n+=3
    } else if (txtPrincipal[n]==="o" && txtPrincipal[n+1]==="b" && txtPrincipal[n+2]==="e" && txtPrincipal[n+3]==="r"){
      txtNuevo +="o"
      n+=3
    } else if (txtPrincipal[n]==="u" && txtPrincipal[n+1]==="f" && txtPrincipal[n+2]==="a" && txtPrincipal[n+3]==="t"){
      txtNuevo +="u"
      n+=3
    } else {
      txtNuevo +=txtPrincipal[n];
    }
  }
  document.getElementById("txtSecondary").value = txtNuevo
}
function copiar(event) {
  event.preventDefault()
  let copyInput = document.getElementById("txtSecondary")
  copyInput.select()
  document.execCommand("copy")
}

var btnE=document.getElementById("btnEncriptar")
btnE.onclick=encriptar
var btnD=document.getElementById("btnDesencriptar")
btnD.onclick=desencriptar
var btnC=document.getElementById("btnCopiar")
btnC.onclick=copiar
