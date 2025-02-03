let products = []
let id = 0

function resetProducts() {
    products = []
    id = 0
}

function addProduct(name, price) {
    if (!name || !price) {
        throw new Error('Name and price must be defined');        
    }
    if (products.some(product => product.name === name)) {
        throw new Error('Product already exist')        
    }
    id ++
    products.push({id, name, price})
}

function removeProduct(id) {
    const index = products.findIndex(product => product.id === id)
    if (index === -1) {
        throw new Error('Product not found')      
    }
    products.splice(index, 1)
}

function getProducts() {
    return products
}

function getProduct(id) {
    const product = products.find(product => product.id === id)
    if (!product) {
        throw new Error('Product not found');        
    }
    return product
}

function updateProduct(id, name, price) {
    const product = products.find(product => product.id === id)
    if (!product) {
        throw new Error('Product not found');        
    }
    if (name !== undefined) {
        product.name = name
    }
    if (price !== undefined) {
        product.price = price
    }
    return product
}

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct,
}