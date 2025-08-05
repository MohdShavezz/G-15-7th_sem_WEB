import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    let token;
    if (req.headers.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1] 
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            if (!decoded) {
                let err = new Error('invalid token')
                err.statusCode = 401
                next(err)
                return
            }
            req.id=decoded.id
            return next()
        } catch (error) {
            console.log(error)
        }
    }
    return next(new Error('Invalid user'))
}
