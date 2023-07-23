import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = ({isAutentication}) => {
  return (
    <>
        {isAutentication ? <Outlet/> : <Navigate to= "/login" />}
    </>
  )
}

export default PrivateRouter