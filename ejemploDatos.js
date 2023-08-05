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
        return product //esto solo retorna el objeto product encontrado por id, no solamente imprimirlos.
    }
}

function promoInterMiami() {
    const productManager = new ProductManager()
    const product = productManager.getProductById(0) //al hacer esto espero obtener los datos del producto de id 1 y guardarlos en la variable const product
    product.price *= 0.8 //quiero hacer una promo de 20% de descuento en este producto accediendo a la propiedad price del producto que creo devuelve getProductById
    console.log(`GRAN PROMO MESSI CON 20% OFF: ${product.name} a solo ${product.price}`) //se ejecuta correctamente, porque retorne datos no solo una impresión de pantalla
}

promoInterMiami()

//SALIDA CORRECTA
// marcos@Bocchi:~/coder-house/ejemplo-metodos-dummy$ node ejemploDatos.js 
// GRAN PROMO MESSI CON 20% OFF: Camiseta Inter Miami a solo 160