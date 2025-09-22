import React from 'react'
import { Navigate } from 'react-router-dom'

const withAuth = (BaseComp) => {

    return (props) => {
        const token = true
        if (!token) {
            return <Navigate to={'/login'} />
        }
        return <BaseComp {...props} />
    }
}

export default withAuth

export const Protected=({children})=>{

    const token = false
        if (!token) {
            return <Navigate to={'/login'} />
        }
    return children
}


