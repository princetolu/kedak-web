import React from "react"
import '../card & register/style.css'

import Download from "../button/Download";

import img1 from '../../assets/images/Frame2.png';
import img2 from '../../assets/images/iPhone1.png'
import img3 from '../../assets/images/iPhone2.png'

function Register() {
  return (
    <div>
      <div class="row gx-5 register">

        <div class="col-5 left">
          <p><i class="bi bi-lightbulb"></i> 2 / 4</p>

          <h3>Download app</h3>

          <p>Application is free and now available on <br /> Apple store.</p>

          <Download />

          <img src={img1} alt="" />
        </div>

        <div class="col-7 right">

          <div class="mb-3 top">
            <p><i class="bi bi-lightbulb"></i> 3 / 4</p>

            <h3>Register after installing</h3>

            <p>Fill in every textfield so that when your card is scanned, the reciepient gets all your contact info.</p>

            <img src={img2} alt="" />
          </div>

          <div class="bottom">
            <p><i class="bi bi-lightbulb"></i> 3 / 4</p>

            <h3>Register after installing</h3>

            <p>Fill in every textfield so that when your card is scanned, the reciepient gets all your contact info.</p>

            <img src={img3} alt="" />
          </div>

        </div>
      </div>
    </div>
  )
};

export default Register;







<div class="row ">

<div class="col-md-5 ">


  

  
</div>

<div class="col-md-7 right">
  
</div>
</div>