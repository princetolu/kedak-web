import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Toggle from './components/toggle/Toggle.jsx'
import Download from './components/button/Download.jsx'
import Order from './components/button/Order.jsx'
import Idea from './components/idea/Idea.jsx'
import Card from './components/card & register/Card.jsx'
import Register from './components/card & register/Register.jsx'
import Pricing from './components/pricing/Pricing.jsx'
import Rating from './components/Rating/Rating.jsx'
import Accordion from './components/accordion/Accordion.jsx'
import Footer from './components/footer/Footer.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "download/",
    element: <Download />
  },
  {
    path: "order/",
    element: <Order />
  },
  {
    path: "toggle/",
    element: <Toggle />
  },
  {
    path: "idea/",
    element: <Idea />
  },
  {
    path: "card/",
    element: <Card />
  },
  {
    path: "register/",
    element: <Register />
  },
  {
    path: "pricing/",
    element: <Pricing />
  },
  {
    path: "rating/",
    element: <Rating />
  },
  {
    path: "accordion/",
    element: <Accordion />
  },
  {
    path: "footer/",
    element: <Footer />
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
