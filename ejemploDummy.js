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
        return console.log(product) //esto solo retorna una llamada de console.log que imprime en pantalla, pero los datos no son retornados
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
// { id: 0, name: 'Camiseta Inter Miami', price: 200, stock: 10 }
// file:///home/marcos/coder-house/ejemplo-metodos-dummy/ejemploDummy.js:28
//     product.price *= 0.8 //quiero hacer una promo de 20% de descuento en este producto accediendo a la propiedad price del producto que creo devuelve getProductById
//     ^

// TypeError: Cannot read properties of undefined (reading 'price')
//     at promoInterMiami (file:///home/marcos/coder-house/ejemplo-metodos-dummy/ejemploDummy.js:28:5)
//     at file:///home/marcos/coder-house/ejemplo-metodos-dummy/ejemploDummy.js:32:1
//     at ModuleJob.run (node:internal/modules/esm/module_job:194:25)

// Node.js v18.16.0