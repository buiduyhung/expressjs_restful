const {User} = require("../models/index")

module.exports = {
    getUsers: async () => {
        const users = await User.findAll({
            attributes: {exclude: "password"},
        })
        return users
    }
}