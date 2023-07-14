import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRouter = ({isAutentication}) => {
  return (
    <>
        {isAutentication ? <Navigate to= "/"/> : <Outlet/>}
    </>
  )
}

export default PublicRouter