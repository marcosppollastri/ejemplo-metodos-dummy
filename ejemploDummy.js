class ProductManager {
    constructor() {
        this.products = [
            {
                id: 0, //simplifico los products solo por ser un ejemplo
                name: 'Camiseta Inter Miami',
                price: 200,
                stock: 10
            },
            {
                id: 1,
                name: 'Camiseta Orlando City',
                price: 100,
                stock: 20
            }
        ] //hago un hardcodeo de products solo por propositos del ejemplo
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id) //busco el primer producto en el array de products que cumpla con la condición
        return console.log(products) //esto solo retorna una llamada de console.log que imprime en pantalla, pero los datos no son retornados
    }
}

function promoInterMiami() {
    const productManager = new ProductManager()
    const product = productManager.getProductById(0) //al hacer esto espero obtener los datos del producto de id 1 y guardarlos en la variable const product
    product.price *= 0.8 //quiero hacer una promo de 20% de descuento en este producto accediendo a la propiedad price del producto que creo devuelve getProductById
    console.log(`GRAN PROMO MESSI CON 20% OFF: ${product.name} a solo ${product.price}`)
}

promoInterMiami()

// SALIDA DE EJECUCIÓN
// marcos@Bocchi:~/coder-house/ejemplo-metodos-dummy$ node ejemploDummy.js 
// /home/marcos/coder-house/ejemplo-metodos-dummy/ejemploDummy.js:21
//         return console.log(products) //esto solo retorna una llamada de console.log que imprime en pantalla, pero los datos no son retornados
//                            ^

// ReferenceError: products is not defined 
//     at ProductManager.getProductById (/home/marcos/coder-house/ejemplo-metodos-dummy/ejemploDummy.js:21:28)
//     at promoInterMiami (/home/marcos/coder-house/ejemplo-metodos-dummy/ejemploDummy.js:27:36)
//     at Object.<anonymous> (/home/marcos/coder-house/ejemplo-metodos-dummy/ejemploDummy.js:32:1)
//     at Module._compile (node:internal/modules/cjs/loader:1254:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
//     at Module.load (node:internal/modules/cjs/loader:1117:32)
//     at Module._load (node:internal/modules/cjs/loader:958:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47

// Node.js v18.16.0