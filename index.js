let filas=Number(prompt("Agrega el # de filas"))
let colum=Number(prompt("Agrega el # de columnas"))

console.log("filas "+filas+" Columnas "+colum)

function matrixMaker(){
  let ele=document.getElementById('matriz')
  console.log(ele)
  let tab="<table>"
  for (let i=0;i<filas;i++) {
    tab=tab+"<tr>"
    for (var j=0;j<colum;j++) {
      tab=tab+"<td></td>"
    }
    tab=tab+"</tr>"
  }
  tab=tab+"</table>"
  ele.innerHTML= tab
}

matrixMaker()
