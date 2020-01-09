const Users = require('../models/user.model')

module.exports.login = async(req, res) => {
    const candidate = await Users.findOne()
}
module.exports.createUser = (req, res) => {

}