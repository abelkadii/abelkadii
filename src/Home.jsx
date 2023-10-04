import React from 'react'

import './Home.css'

function Home() {
  return (
    <div className="home" id="home">
        <div className="home__body">
            <div className="home__body__left">
                <h3 className="home__body__left__title">
                    Full-stack Software Developer, Designer
                </h3>
                <h3 className="home__body__left__text">
                    I am Abdelrrahman and I like to create simple websites with great user experience
                </h3>
                <div className="home__body__left__links">
                    <h3>Find Me On</h3>
                    <a target="_blank" href="https://github.com/abelkadii" className="home__body__left__links__item">
                        <img src="/static/svg/github.svg" alt="" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/abdelrrahman-belkadi-4099a0275/" className="home__body__left__links__item">
                        <img src="/static/svg/linkedin.svg" alt="" />
                    </a>
                    <a target="_blank" href="https://dribbble.com/Abelkadii" className="home__body__left__links__item">
                        <img src="/static/svg/dribbble.svg" alt="" />
                    </a>
                </div>
            </div>
            <div className="home__body__right">
                <img src="/static/svg/guy.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home