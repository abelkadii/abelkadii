import {React, useRef} from 'react'
import './ProjectItem.css'

function ProjectItem({ name, shot, text, code, tech, demo, revr }) {
  return (
    <div className={`projectitem ${revr?'projectitem--reverse':''}`}>
        <div className="projectitem__shot">
            <img src={shot} alt="" />
        </div>
        <div className="projectitem__details">
            <div className="projectitem__details__half">
                <div className="projectitem__details__half__top">
                    <h3 className="projectitem__details__half__top__name">{name}</h3>
                    <a target="_blank" href={demo} className="projectitem__details__half__top__demo"><img src="/static/svg/demo.svg" alt="" /></a>
                </div>
                <p className="projectitem__details__half__text">{text}</p>
            </div>
            <div className="project__details__bottom">
                <div className="projectitem__details__bottom__tech">
                    {tech.map((item, index)=><img key={index} className="projectitem__details__tech__bottom__item" src={`/static/svg/${item}.svg`}/>)}
                </div>
                <a target="_blank" href={code} className="projectitem__details__bottom__code"><img src="/static/svg/code.svg" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem