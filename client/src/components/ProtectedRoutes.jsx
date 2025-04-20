import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({ children }) {
  const { isAuth } = useContext(AuthContext)

  if (!isAuth) {
    return <Navigate to="/signin" />
  }

  return children
}

export default ProtectedRoutes
