const { getUsers } = require("../services/user.service")
const { successResponse } = require("../ultis/response")

module.exports = {
    index: async (req, res) => {
        const users = await getUsers()
        return successResponse({
            res,
            data: users,
            message: "List of users",
        })
    },
}