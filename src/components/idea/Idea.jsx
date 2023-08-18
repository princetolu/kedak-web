import React from "react"
import "../idea/idea.css"

import Download from '../button/Download'

import  img1 from '../../assets/images/Rectangle1.png'
import  img2 from '../../assets/images/Rectangle2.png'
import  img3 from '../../assets/images/Rectangle3.png'
import  img4 from '../../assets/images/Rectangle4.png'

function Idea() {
  return (
    <div className="idea">
      <div className="text">
        <p><i class="bi bi-lightbulb"></i> The Idea</p>

        <h1>Lifetime connections on your phone</h1>

        <Download />

        <p className="note"><i class="bi bi-pencil"></i> Note</p>

        <ul>
            <li>Instantly share information with someone you're meeting for the first time.</li>
            <li>Easily scan cards without stress. Get any card of your own choice.</li>
            <li>Contact anyone you have come across through any of their social media handles on their profile.</li>
        </ul>

      </div>

      <div className="picture">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
    </div>
  )
};

export default Idea;



{/* 
        
        
         */}