class ProductManager {
    constructor() {
        this.products = []
    }

    getProducts = () => { return this.products }

    generateID = () => {
        const count = this.products.length

        if (count == 0) return 1;

        const lastProduct = this.products[count - 1]
        const lastID = lastProduct.id
        const nextID = lastID + 1

        return nextID
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const id = this.generateID()

        const product = {
            id,
            title,  
            description,
            price,
            thumbnail,
            code,
            stock,
        }
        
        const duplicateCode = this.products.some(product => product.code === code)

        if(!duplicateCode){
            this.products.push(product)
        }
    }


    getProductByID = (id) => {
        const productFound = this.products.find(product => product.id === id)
        return productFound || console.log("Not found")
    }
}

const manager = new ProductManager()

console.log(manager.getProducts()); 

manager.addProduct("producto 1","lala",2000,"N/A","ab-1",2)

manager.addProduct("producto 2","lalala",2500,"N/A","ab-2",5)

manager.addProduct("producto 2","lalalalala",3000,"N/A","ab-3",7)



console.log(manager.getProducts()); //array con productos agregados

manager.getProductByID(5); //error por producto no encontradonode