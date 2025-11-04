 // Aquí tu código
const botonAgregar = document.getElementById("agregarElemento");
const lista = document.getElementById("lista");


botonAgregar.addEventListener("click", () => {
 
  const nuevoElemento = prompt("Introduce un elemento para agregar a la lista:");

  
  if (nuevoElemento && nuevoElemento.trim() !== "") {
    
    const li = document.createElement("li");
    li.textContent = nuevoElemento;

    
    lista.appendChild(li);
  } else {
    alert("Por favor, escribe un texto válido antes de agregarlo.");
  }
});