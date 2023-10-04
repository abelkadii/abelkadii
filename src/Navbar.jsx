import React, { useState } from 'react';


import './Navbar.css'


function Navbar() {
    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
    const [dropDown, setDropDown] = useState(false)
    return ( 
        <div className="navbar">
            <h3 className="navbar__logo">ETch<span>.</span></h3>
            <div className="navbar__links">
                <a href='#home' className="navbar__links__item">Home</a>
                <a href='#about' className="navbar__links__item">About</a>
                <a href='#projects' className="navbar__links__item">Projects</a>
                <a href='#contact' className="navbar__links__item">Contact</a>
            </div>
            <div className="navbar__right">
                <a href="https://www.upwork.com/freelancers/~017d435babe5d42e85" target="_blank" className="navbar__right__left">Upwork</a>
                {/* <a target="_blank" href="/resume" className="navbar__right__left">Resume</a> */}
                <a target="_blank" href="mailto:etbelkadi@gmail.com" className="navbar__right__right">Say Hi</a>
            </div>
            <div className={`navabr__burger ${dropDown?'navabr__burger-active':''}`} onClick={async ()=>{
                if(dropDown){
                    let ele = document.getElementById('nav-drop')
                    ele.classList.add('leave-animation')
                    await sleep(100)
                    setDropDown(!dropDown)
                    ele.classList.remove('leave-animation')
                }
                else{
                    setDropDown(!dropDown)
                }
                
            }}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`navbar__dropdown ${dropDown?'navbar__dropdown-active':''}`} id="nav-drop">
                <a href='#home' onClick={()=>setDropDown(false)} className="navbar__dropdown__item">Home</a>
                <a href='#about' onClick={()=>setDropDown(false)} className="navbar__dropdown__item">About</a>
                <a href='#projects' onClick={()=>setDropDown(false)} className="navbar__dropdown__item">Projects</a>
                <a href='#contact' onClick={()=>setDropDown(false)} className="navbar__dropdown__item">Contact</a>
                <a href="https://www.upwork.com/freelancers/~017d435babe5d42e85" target="_blank" className="navbar__dropdown__item">Upwork</a>
                {/* <a target="_blank" href="/resume" className="navbar__dropdown__item">Resume</a> */}
                <a target="_blank" href="mailto:etbelkadi@gmail.com" className="navbar__dropdown__item">Say Hi</a>
            </div>
        </div> 
  )
}

export default Navbar