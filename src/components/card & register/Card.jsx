import React from "react"
import '../card & register/style.css'
import Order from "../button/Order";

import img from '../../assets/images/Frame1.png'

function Card() {
  return (
    <div className="row get">
      <div className="col-md-6 text">
        <p><i class="bi bi-lightbulb"></i> 1 / 4</p>

        <h1>Get a Card</h1>

        <p>Order any kind of card you want based <br /> on your preference and budget.</p>

        <Order />
      </div>

      <div className="col-md-6 picture">
        <img src={img} alt="" />
      </div>
    </div>
  )
};

export default Card;