import React from "react"
import "../idea/idea.css"
import 'animate.css';

import Download from '../button/Download'

import  img1 from '../../assets/images/Rectangle1.png'
import  img2 from '../../assets/images/Rectangle2.png'
import  img3 from '../../assets/images/Rectangle3.png'
import  img4 from '../../assets/images/Rectangle4.png'

function Idea() {
  return (
    <div>
      <div className="row mb-3 idea mt-5">

        <div className="col-lg-6 themed-grid-col p-5 ani-left">
          <div classNameName="text">
            <p><i className="bi bi-lightbulb"></i> The Idea</p>

            <h1>Lifetime connections on your phone</h1>

            <div className="my-5"><Download /></div>

            <p classNameName="note"><i className="bi bi-pencil"></i> Note</p>

            <ul>
              <li>Instantly share information with someone you're meeting for the first time.</li>
              <li>Easily scan cards without stress. Get any card of your own choice.</li>
              <li>Contact anyone you have come across through any of their social media handles on their profile.</li>
            </ul>

          </div>
        </div>

        <div className="col-lg-6 themed-grid-col ani-right">

          <div className="row">
            <div className="col-md-6 themed-grid-col"><img src={img1} alt="" /></div>
            <div className="col-md-6 themed-grid-col"><img src={img2} alt="" /></div>
          </div>

          <div className="row">
            <div className="col-md-6 themed-grid-col"><img src={img3} alt="" /></div>
            <div className="col-md-6 themed-grid-col"><img src={img4} alt="" /></div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default Idea;