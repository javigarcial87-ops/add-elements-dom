 // Aquí tu código

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


// const agregar = document.getElementById("agregarElemento");
// const list = document.getElementById("lista");
// const nuevoElemento = prompt("Introduce un elemento para agregar a la lista:");

// agregar.addEventListener("click", () => {
 
 

  
//   if (nuevoElemento && nuevoElemento.trim() !== "") {
    
//     const li = document.createElement("li");
//     li.textContent = nuevoElemento;

    
//     list.appendChild(li);
//   } else {
//     alert("Por favor, escribe un texto válido antes de agregarlo.");
//   }
// });