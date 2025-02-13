import {createBrowserRouter,RouterProvider} from 'react-router-dom'; 

import React from 'react'

import Country from './Pages/Country'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'

import AppLayout from './Components/AppLayout';
import CountryDetails from './Components/Layout/CountryDetails';

import ErrorElement from './Components/UI/ErrorElement';
import CountryCard from './Components/Layout/CountryCard';


const router=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<ErrorElement/>,
    children:[
      {
        path:'/',
        element:<Home />,
      },
      {
        path:'about',
        element:<About />,
      },
      {
        path:'contact',
        element:<Contact />,
      },
      {
        path:'country/:id',
        element:<CountryDetails/>
      },
      {
        path:'/',
        element:<CountryCard/>
      },{
        path:'country/:id',
        element:<CountryDetails/>
      },
    
      {
        path:'country',
        element:<Country />,
      }
    ]
  }
  
])

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
