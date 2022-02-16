const db = require('../../data/db-config')

async function getByUsername(username) {
    return await db('users').where('username',username).first();
}
async function getAllUsers() {
    return await db('users')
}

module.exports = {getByUsername,getAllUsers}