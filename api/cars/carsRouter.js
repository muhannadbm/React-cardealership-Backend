const router = require('express').Router()
const Cars = require('./carsModel')



router.get("/", async(req,res,next) => {
let cars = await Cars.getAll()
res.json(cars)
})

router.get("/:id", async(req,res,next) => {
    let myid = req.params.id
    let cars = await Cars.getById(myid)
    res.json(cars)
    })

router.post("/", async(req,res,next) => {
    let cars = await Cars.insert(req.body)
    res.json(cars)
    })

router.delete("/", async(req,res,next) => {
let cars = await Cars.deleteCar(req.body.car_id)
res.json(cars)
})
module.exports = router