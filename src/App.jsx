import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Framework from './Framework/Framework'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Notfound from './Notfound/Notfound'

const x = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Framework /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Notfound /> },
    ]
  },
])

function App() {
  return <RouterProvider router={x}></RouterProvider>
}

export default App
