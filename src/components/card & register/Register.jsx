import React from "react"
import '../card & register/style.css'

import Download from "../button/Download";

import img1 from '../../assets/images/Frame2.png';
import img2 from '../../assets/images/iPhone1.png'
import img3 from '../../assets/images/iPhone2.png'

function Register() {
  return (
    <div>
      <div className="row mb-3 register g-5">

        <div className="col-md-6 themed-grid-col left">
          <p><i className="bi bi-lightbulb"></i> 2 / 4</p>

          <h3>Download app</h3>

          <p>Application is free and now available on <br /> Apple store.</p>

          <Download />

          <img src={img1} alt="" />
        </div>

        <div className="col-md-6 themed-grid-col right">

          <div className="top">
            <div className="row">
              <div className="col-md-6">
                <p><i className="bi bi-lightbulb"></i> 3 / 4</p>

                <h3>Register after installing</h3>

                <p>Fill in every textfield so that when your card is scanned, the reciepient gets all your contact info.</p>
              </div>

              <div className="col-md-6">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="row">
              <div className="col-md-6">
                <p><i className="bi bi-lightbulb"></i> 3 / 4</p>

                <h3>Register after installing</h3>

                <p>Fill in every textfield so that when your card is scanned, the reciepient gets all your contact info.</p>
              </div>

              <div className="col-md-6">
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default Register;

<div class="row gx-5 register">

<div class="col-7 right">

  <div class="mb-3 top">
   
  </div>

  <div class="bottom">
   

 
  </div>

</div>
</div>