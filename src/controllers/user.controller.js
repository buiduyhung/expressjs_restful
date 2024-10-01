const { getUsers } = require("../services/user.service")

module.exports = {
    index: (req, res) => {
        const users = getUsers()
        return res.json({users})
    },
}