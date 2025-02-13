import React from 'react'
import { NavLink, useRouteError } from 'react-router'

function ErrorElement() {

    const error=useRouteError();
    console.log(error);

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='bg-red-500 text-white w-full text-center p-2 font-bold text-lg'>Oops! An error Occured</h1>
      {error && <p className='text-red-500 text-center font-medium m-3'>{error.data} and status: {error.status}</p>}
      <NavLink to='/'><button className='bg-slate-400 font-bold hover:bg-slate-700 hover:text-white justify-center text-center align-center rounded-lg p-2 m-3'>Go Home</button></NavLink>
    </div>
  )
}

export default ErrorElement
