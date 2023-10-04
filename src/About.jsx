import React from 'react'
import AboutItem from './AboutItem'
import './About.css'

function About() {
    const qualities = [
        {
            name: 'UI & UX',
            icon: '/static/svg/uiux.svg',
            text: 'Turning ideas into interfaces that are simple, intuitive, efficient, responsive, and enjoyable to use.'
        },
        {
            name: 'Web & Mobile',
            icon: '/static/svg/webmobile.svg',
            text: 'Crafting Beautiful apps that deliver and exceed client expectations for both the web and mobile phones'
        },
        {
            name: 'Creative & Innovative',
            icon: '/static/svg/creativeinnovative.svg',
            text: 'Crafting visually stunning designs that connect with your audience, and communicate your ideas.'
        },
        {
            name: 'Development',
            icon: '/static/svg/development.svg',
            text: 'Bringing your vision to life in the code editor using the latest design and  front-end  trends, tools, and frameworks'
        },
    ]
  return (
    <div className="about" id="about">
        <h3 className="about__title">
            I Collaborate With My Clients To Create The Best Results
        </h3>
        <div className="about__qualities">
            {
                qualities.map((quality, index)=>
                <AboutItem key={index} name={quality.name} icon={quality.icon} text={quality.text} />
                )
            }
        </div>
    </div>
  )
}

export default About