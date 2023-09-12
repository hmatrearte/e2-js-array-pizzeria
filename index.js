const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a)  Las pizzas que tengan un id impar.

const pizzasConIdImpar = pizzas.filter(pizza => pizza.id % 2 !== 0);

console.log("Las pizzas con el ID impar son las siguientes bro:");
console.log(pizzasConIdImpar);


// b) Responder: ¿Hay alguna pizza que valga menos de $600?

const pizzasBaratiolis = pizzas.some(pizza => pizza.precio < 600);

if (pizzasBaratiolis) {
  console.log("Si pa, tranqui que hay pizzas que valen menos de $600");
} else {
  console.log("Te debo amigo, no hay pizzas que valgan menos de $600");
}

// c) El nombre de cada pizza con su respectivo precio.

pizzas.forEach(pizza => {
  console.log(`La famosa ${pizza.nombre}, cuesta: $${pizza.precio}`);
});


// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

pizzas.forEach(pizza => {
  console.log(`La famosa ${pizza.nombre} lleva:`);
  
  pizza.ingredientes.forEach(ingrediente => {
    console.log(ingrediente);
  });
});
