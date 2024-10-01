module.exports = {
    successReponse: ({res, data, status = 200, message = "Success"}) => {
        res.status(status).json({
            success: true,
            data,
            message,
        })
    }
}