import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contact" id="contact">
        <h3 className="contact__title">
            Get In Touch
        </h3>
        <h3 className="contact__description">
            Tell me about your next project Idea
        </h3>
        <div className="contact__links">
            <div className="contact__links__item">
                <div className="contact__links__item__icon">
                    <img src="/static/svg/gmail.svg" alt="" />
                </div>
                <div className="contact__links__item__details">
                    <h3>Email</h3>
                    <a target="_blank" href="mailto:etbelkadi@gmail.com">etbelkadi@gmail.com</a>
                </div>
            </div>
            <div className="contact__links__item">
                <div className="contact__links__item__icon">
                    <img style={{marginTop: 8}} src="/static/svg/upwork.svg" alt="" />
                </div>
                <div className="contact__links__item__details">
                    <h3>Upwork</h3>
                    <a target="_blank" href="https://www.upwork.com/freelancers/~017d435babe5d42e85">visit my upwork profile</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact