

const persona = {
  nombre: "Juan"
}
function Tarea(nombre, urgencia){
  this.nombre = nombre;
  this.urgencia = urgencia
}

Tarea.prototype.mostrarInformacionTarea = (){
  return `Tarea ${this.nombre}, con prioridad: ${this.urgencia}`
}

// Crear una nueva tarea
console.log(persona)


const tarea1 = new Tarea('Aprender Js', 'Urgente')

//const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia)

console.log(tarea1.mostrarInformacionTarea())