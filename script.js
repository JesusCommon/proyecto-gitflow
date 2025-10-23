function agregarTarea() {
  const input = document.getElementById('tarea');
  const lista = document.getElementById('lista');
  const nuevaTarea = document.createElement('li');

  if (input.value.trim() !== "") {
    nuevaTarea.textContent = input.value;
    lista.appendChild(nuevaTarea);
    input.value = "";
  }
}
