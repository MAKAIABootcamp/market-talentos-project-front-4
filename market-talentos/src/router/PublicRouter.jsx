import React from 'react'
import {  Outlet } from 'react-router-dom'

const PublicRouter = ({isAutentication}) => {
  return (
    <>
        {isAutentication ? null : <Outlet/>}
    </>
  )
}

export default PublicRouter