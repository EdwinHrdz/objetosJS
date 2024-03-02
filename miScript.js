"use strict";

// 1) Crear un objeto con 5 propiedades
const pokemon = {
    nombre: 'Pikachu',
    tipo: "Electrico",
    nivel: 80,
    numeroPokedex: '25',
    habilidadEspecial: 'Impactrueno'
  };
  
  // 2) Muestra en consola el contenido del objeto
  console.log(pokemon);
  
  // 3) Accede a 3 propiedades y muestra en la consola del navegador el valor de cada propiedad
  console.log('Nombre:', pokemon.nombre);
  console.log('Tipo:', pokemon.tipo);
  console.log('Nivel:', pokemon.nivel);
  
  // 4) Agrega una nueva propiedad al objeto y muestra en la consola el objeto
  pokemon.debilidad = 'Tipo Tierra';
  console.log(pokemon);
  
  // 5) Elimina 2 propiedades del objeto y muestra en consola el objeto
  delete pokemon.numeroPokedex;
  delete pokemon.habilidadEspecial;
  console.log(pokemon);
  
  // 6) Crea una variable y asigna cualquier valor del objeto. Despliega en la consola del navegador el valor que contiene la variable creada
  let habilidad = pokemon.habilidadEspecial; // Esta propiedad ya fue eliminada, será undefined
  console.log(habilidad);
  
  // 7) Integra un nuevo objeto con 2 propiedades dentro del objeto existente y despliega en la consola del navegador para observar la estructura
  pokemon.detalles = {
    ataques: ['Ataque rápido', 'Impactrueno'],
    aprendidos: ['Agilidad', 'Excavar']
  };
  console.log(pokemon);
  
  // 8) Accede a una de las propiedades del objeto que integraste en el punto anterior y muestra en consola el valor seleccionado
  console.log('Ataques:', pokemon.detalles.ataques);
  
  // 9) Cambia el valor de cualquier propiedad del objeto y muestra en consola el cambio del valor
  pokemon.nombre = 'Raychu';
  console.log('Nuevo nombre:', pokemon.nombre);
  
  // 10) Aplica el método Object.freeze sobre tu objeto y demuestra que no se puede modificar dicho objeto
  Object.freeze(pokemon);
  pokemon.tipo = "Acero"; // Intenta cambiar la edad
  pokemon.movEspecial = 'Surf'; // Intenta agregar una nueva propiedad
  console.log('Intento de modificar objeto congelado:', pokemon);
  