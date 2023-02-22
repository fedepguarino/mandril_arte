// let edad = parseInt(prompt("Ingrese su edad"))
// if(edad >= 18){
//     alert("Sos mayor de edad, disfruta de nuestro contendo sin restricciones")
//     console.log("Usuario confirma mayoría de edad")
// }else{
//     alert("No sos mayor, lamentablemente no podes continuar")
//     console.log("Usuario informa ser menor de edad")
// }

// for (let i = 0; i < 5; i++){
//     let nombreCliente = prompt("Escriba su nombre y apellido para generar un turno")
//     alert (`El turno ${i} en el estudio N°, le corresponde a ${nombreCliente}, Turno 0: 17hs, los turnos tienen una duración de 50 minutos`)
//     console.log(nombreCliente)
//     console.log(i)
// }

const producto1 = {
    id: 1,
    nombre: "Tinta p/ tatuar",
    marca: "Xtreme",
    precio: 2000,
    img: "xtreme.jpg",
}

const producto2 = {
    id: 2,
    nombre: "Tinta p/ tatuar",
    marca: "Dinamic",
    precio: 2500,
    img: "dinamic.jpg",

}

const producto3 = {
    id: 3,
    nombre: "Maquina de tatuar",
    marca: "Pen magma",
    precio: 24000,
    img: "penmagma.jpg",
}

const producto4 = {
    id: 4,
    nombre: "Agujas * 10 unidades",
    marca: "Ez revolution",
    precio: 2500,
    img: "agujas.jpg"
}

console.log(producto1.nombre)
console.log(producto1.marca)
console.log(producto1.precio)

console.log(producto2.nombre)
console.log(producto2.marca)
console.log(producto2.precio)

console.log(producto3.nombre)
console.log(producto3.marca)
console.log(producto3.precio)

console.log(producto4.nombre)
console.log(producto4.marca)
console.log(producto4.precio)


let i = 0
for(const prop in producto1){
    i++
    console.log("el valor de la propiedad n° " +i + " es " + producto1 [prop])
}

//Function para crear objetos para el ingreso de nuevos artículos. Funcion constructora.
function Producto (id, nombre, marca, precio, img){
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.img = img


    this.mostrarInfo = function(){
        console.log(`El artículo ${this.nombre}de la marca ${this.marca} tiene un precio de $ ${this.precio}.`)
    }
}
//Instanciación de objeto.
const Producto5 = new Producto ( 5, "Guantes de latex * 100 unidades ", "Mediglove", 4300, "guantes.jpg")
console.log(Producto5)

//Aplicación de métodos.
Producto5.mostrarInfo()

//Creacion de un array como carpeta "Tienda"
const tienda = []
tienda.push(producto1, producto2, producto3, producto4, Producto5)
console.log(tienda)

//Recorriendo el array
console.log("Los productos de nuestra tienda son:")
for(let elemento of tienda){
    console.log(elemento.nombre, elemento.marca, elemento.precio)
}


let productosDiv = document.getElementById("productos")

function verCatalogo(array){
    for (let producto of array){
        let nuevoProductoDiv = document.createElement("div")
        nuevoProductoDiv.className = "col-12 col-md-6 col-lg-4 my-5"
        nuevoProductoDiv.innerHTML =  `
        <div id="${producto.id}" class="card" style="width: 18rem;">
            <img class="card-img-top img-fluid" style="height: 200px;" src="../img/${producto.img}">
            <div class="card-body">
                <h4 class="card-title"></h4>
                <p>${producto.nombre}</p>
                <p class="">Precio: $${producto.precio}</p>
            <button id="" class="btn btn-outline-success">Agregar al carrito</button>
        </div>
        </div>
        `
    
        productosDiv.appendChild(nuevoProductoDiv)
    }
}
verCatalogo(tienda)

let inputBuscador = document.getElementById("buscador")

inputBuscador.addEventListener("input", ()=>{
    console.log(inputBuscador.value)
})




