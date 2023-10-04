import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
        <h3 className="footer__text">
            Building digital products, brands, and experience.
        </h3>
        <h3 className="footer__logo">ETch<span>.</span></h3>
        <div className="footer__links">
            <a target="_blank" href="https://github.com/abelkadii"><img src="/static/svg/github.svg" alt="" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/abdelrrahman-belkadi-4099a0275/"><img src="/static/svg/linkedin.svg" alt="" /></a>
            <a target="_blank" href="https://dribbble.com/Abelkadii"><img src="/static/svg/dribbble.svg" alt="" /></a>
        </div>
        <h3 className="footer__copyright">
            2023 © all rights are reserved
        </h3>
    </div>
  )
}

export default Footer