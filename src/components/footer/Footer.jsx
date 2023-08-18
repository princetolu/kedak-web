import React from "react"
import '../footer/style.css'

import { Link } from "react-router-dom";

function Footer() {
  return (
      <div>
          <div className="container-fluid">
              <footer className="py-3 my-4">

                  <p className="text-center text-body-secondary">Follow us on</p>

                  <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                      <li className="nav-item"><Link to={'#'} className="nav-link px-3 text-body-secondary"><i className="bi bi-twitter"></i></Link></li>
                      <li className="nav-item"><Link to={'#'} className="nav-link px-3 text-body-secondary"><i className="bi bi-instagram"></i></Link></li>
                      <li className="nav-item"><Link to={'#'} className="nav-link px-3 text-body-secondary"><i className="bi bi-telegram"></i></Link></li>
                      <li className="nav-item"><Link to={'#'} className="nav-link px-3 text-body-secondary"><i className="bi bi-facebook"></i></Link></li>

                  </ul>

                  <p className="text-center text-body-secondary">Kedak 2023 ©</p>
              </footer>
          </div>
      </div>
  )
};

export default Footer;


