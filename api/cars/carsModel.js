const db = require('../../data/db-config')


async function  getAll(){
    return await db('cars as c')
.leftJoin('cars_image as ci', 'ci.car_id', 'c.car_id')
.select('ci.*', 'c.*')
}

async function getById(id){
    return await db('cars').where('car_id', id)
}

async function insert(car){
    const [newCar] = await db('cars').insert(car, ['car_id', 'car_make', 'car_model','car_milage','car_fuel','car_doors','car_color','car_image'])
    const MyCar = await db('cars').where('car_id', newCar)
    return MyCar
}

async function deleteCar(car){
    const newCar = await db('cars').where('car_id',car).del()
    return newCar
}



module.exports = {getAll, getById, insert,deleteCar}