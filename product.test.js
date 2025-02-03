const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});

describe('addproduct', () => {
    it('debería agregar un producto', () => {
        addProduct('Producto 1', 11)
        const products = getProducts()
        expect(products).toHaveLength(1)
        expect(products[0]).toEqual({id: 1, name: 'Producto 1', price: 11})
    })
    it('debería incrementar el id en 1 cada vez que se añada un producto', () => {
        addProduct('Producto 1', 11)
        addProduct('Producto 2', 22)
        const products = getProducts()
        expect(products[0].id).toBe(1)
        expect(products[1].id).toBe(2)
    })
    it('debería lanzar un error si el nombre o el precio no están definidos', () => {
        expect(() => addProduct()).toThrow('Name and price must be defined')
        expect(() => addProduct('Producto 1', undefined)).toThrow('Name and price must be defined')
        expect(() => addProduct(undefined, 11)).toThrow('Name and price must be defined')
    })
    it('debería lanzar un error si el producto ya existe', () => {
        addProduct('Producto 1', 11)
        expect(() => addProduct('Producto 1', 11)).toThrow('Product already exist')
    })
})

describe('removeProduct', () => {
    it('debería eliminar un producto', () => {
        addProduct('Producto 1', 11)
        removeProduct(1)
        const products = getProducts()
        expect(products).toHaveLength(0)
    })
    it('debería lanzar un error si el producto no existe', () => {
        expect(() => removeProduct(1)).toThrow('Product not found')
    })
})

describe('getProduct', () => {
    it('debería devolver un producto por su id', () => {
        addProduct('Producto 1', 11)
        const product = getProduct(1)
        expect(product).toEqual({id: 1, name: 'Producto 1', price: 11})
    })
    it('debería lanzar un error si el producto no existe', () => {
        expect(() => getProduct(1)).toThrow('Product not found')
    })
})

describe('updateProduct', () => {
    it('debería actualizar un producto por su id', () => {
        addProduct('Producto 1', 11)
        updateProduct(1, 'Producto actualizado', 18)
        const product = getProduct(1)
        expect(product).toEqual({id: 1, name: 'Producto actualizado', price: 18})
    })
    it('debería lanzar un error si el producto no existe', () => {
        expect(() => updateProduct(1, 'Producto actualizado', 18)).toThrow('Product not found')
    })
})