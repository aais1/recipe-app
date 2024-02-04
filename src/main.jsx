import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter , createRoutesFromElements , RouterProvider , Route, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import RecipeCard from './components/RecipeCard'
import RecipeDetail from './components/RecipeDeail'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Home/>}/>
    <Route path='/recipe/:id' element={<RecipeDetail/>}/>
    </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
