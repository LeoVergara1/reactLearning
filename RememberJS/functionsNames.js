const persona = {
  nombre: "Juan",
  mostrar: function() {
    console.log(`Hola: ${this.nombre}`)
  }
}

console.log(persona.mostrar())