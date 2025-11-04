 // Aquí tu código
const agregar = document.getElementById("agregarElemento");
const lista = document.getElementById("lista");


agregar.addEventListener("click", () => {
 
  const nuevoElemento = prompt("Introduce un elemento para agregar a la lista:");

  
  if (nuevoElemento && nuevoElemento.trim() !== "") {
    
    const li = document.createElement("li");
    li.textContent = nuevoElemento;

    
    lista.appendChild(li);
  } else {
    alert("Por favor, escribe un texto válido antes de agregarlo.");
  }
});