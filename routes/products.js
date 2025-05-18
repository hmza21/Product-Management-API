import express from 'express'

const router = express.Router()

const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 }
];

router.get("/", (request, response) => response.json(products))

router.get("/:id", (request, response) => response.json(products.find(product => product ? product.id == request.params.id : response.status(404))))

router.post("/", (request, response) => {
    
    products.push({
        id: products[products.length - 1].id + 1 || 0,
        name: request.body.name,
        price: parseInt(request.body.price)
    })
    
    response.json(products[products.length - 1])
})

router.put("/:id", (request, response) => {
    const id = request.params.id
    
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].name = request.body.name
            products[i].price = parseInt(request.body.price)
            break
        }
    }

    response.json(products[id])
})

router.delete("/:id", (request, response) => {
    const id = request.params.id
    let index = null

    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            index = i
            break
        }
    }

    const product = products[index]
    products.splice(index, 1)

    console.log(products)

    return response.json(product)
})

export default router
