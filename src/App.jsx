import { useState } from 'react'
import './App.css'

import Download from './components/button/Download'
import Order from './components/button/Order'
import Idea from './components/idea/Idea'
import Card from './components/card & register/Card'
import Register from './components/card & register/Register'
import Pricng from './components/pricing/Pricing'
import Toggle from './components/toggle/Toggle'
import Accordion from './components/accordion/Accordion'
import Footer from './components/footer/Footer'

import logo from '../src/assets/images/logo.png'
import iphone from '../src/assets/images/iphone.png'
import vector from '../src/assets/images/Vector.png'
import ceo from '../src/assets/images/Ellipse1.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <img src={logo} alt="logo" className='logo' />

        <h2>Make Every <br /> Connection Count</h2>

        <p>Unlock your networking potential with OVOU's all-in-one digital business card solution.</p>

        <div className='button'>
          <Download />
          
          <Order />
        </div>

        <img src={vector} alt="vector" className='vector' />

        <img src={iphone} alt="phone" className='phone' />
      </div>


      <div className='ceo'>
        <h2>“Sana is the first system I've seen that can truly be an end-to-end learning platform for companies.”</h2>

        <div className='ceo-name'>
          <img src={ceo} alt="" />

          <div>
            <h4>Vladimir Roshuv</h4>
            <h6>C.E.O</h6>
          </div>
        </div>

      </div>

      <Idea />


      <div className='walkthrough'>
        <p><i class="bi bi-gear-fill"></i>  Walkthrough</p>

        <h2>How Kedak Works</h2>

        <h5>Here are steps you can follow to navigate your way <br /> through the whole system.</h5>
      </div>

      <Card />

      <Register />

      <div className='payment'>
        <p><i class="bi bi-gear-fill"></i>  Card Payment</p>

        <h2>Card Pricing</h2>

        <h5>Here are steps you can follow to navigate your way <br /> through the whole system.</h5>
      </div>

      <div>
        <Pricng />
      </div>


      <div className='text-center my-5'>
        <p><i class="bi bi-question-circle-fill"></i> <b>Questions</b></p>

        <h2>FAQ</h2>

        <Accordion />
      </div>

      <div className='mt-5'>
        <Footer />
      </div>
      
    </>
  )
}

export default App
