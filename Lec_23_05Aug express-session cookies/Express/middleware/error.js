export const errorMiddleware=(err, req, res, next) => {
    // console.log(err.stack)
    let statusCode = res.statusCode || 500
    res.status(statusCode).json({ message: err.message || 'internal server errror' })
}