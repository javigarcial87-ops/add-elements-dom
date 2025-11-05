

function agregarElemento(){
  const nuevoElemento=prompt("Introduce un nuevo elemento");
  if(nuevoElemento && nuevoElemento.trim()!==""){
    const lista = document.getElementById("lista")
    const li=document.createElement("li");
    li.textContent=nuevoElemento;
    lista.appendChild(li);
  } else{
    alert("Por favor, escribe un texto válido antes de agregarlo.");
  }
}


