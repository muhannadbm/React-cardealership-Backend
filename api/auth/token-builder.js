const jwt = require('jsonwebtoken')

const tokenBuilder = (user) => {
    const payload = {
        userid: user.user_id,
        username: user.username,

    }
    const options = {
        expiresIn: '1d'
    }
    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        options
    )
    return token
}
module.exports = tokenBuilder