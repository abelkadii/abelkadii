import React from 'react'
import './AboutItem.css'

function AboutItem({ name, icon, text }) {
  return (
    <div className="aboutitem">
        <div className="aboutitem__top">
            <div className="aboutitem__top__icon">
                <img src={icon} alt={name} />
            </div>
            <h3 className="aboutitem__top__name">
                {name}
            </h3>
        </div>
        <p className="aboutitem__text">
            {text}
        </p>
    </div>
  )
}

export default AboutItem