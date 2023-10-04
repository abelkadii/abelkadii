import React from 'react'

import './Projects.css'
import ProjectItem from './ProjectItem'

function Projects() {
    const projects = [
        {
            name: 'Biccas',
            shot: '/static/shots/biccas.png',
            text: "Biccas is a company that provides services that make your work more organized and efficient by using the Task.io Dashboard, which offers many latest features for managing tasks every day. With this tool, you can easily stay on top of your workload and increase productivity.",
            code: 'https://github.com/abelkadii/biccas',
            tech: ['javascript', 'react', 'html', 'sass', 'figma'],
            demo: 'https://biccas-ca75a.web.app/'
        },
        {
            name: 'Abelkadi',
            shot: '/static/shots/abelkadii.png',
            text: "ABelkadi is this website. Which is a landing page that showcases some of the previus projects that I've worked on, and provides information about my skills, and a way to get in touch in case you have a project idea through my email or upwork profile",
            code: 'https://github.com/abelkadii/abelkadii',
            tech: ['javascript', 'react', 'sass', 'figma'],
            demo: '#'
        },
        {
            name: 'Dermedia',
            shot: '/static/shots/dermedia.png',
            text: "at Dermedia. we're dedicated to staying on top of the latest trends and technologies. We're always exploring new ways to push the boundaries of digital design . With our focus on simplicity, innovation, and compromise , we're confident that we can deliver the best possible results for our clients.",
            code: 'https://github.com/abelkadii/dermedia',
            tech: ['javascript', 'css', 'react', 'figma'],
            demo: 'https://dermedia-64d44.web.app/'
        }
    ]
  return (
    <div className="projects" id="projects">
        <h3 className="projects__title">
            Some Of My Projects
        </h3>
        <h3 className="projects__description">
        Here are a few past web projects I've worked on. Want to see more? <a target="_blank" href="mailto:etbelkadi@gmail.com">Email me</a>.
        </h3>
        <div className="projects__items">
            {
                projects.map((project, index)=>
                <ProjectItem 
                    key={index}
                    name={project.name}
                    shot={project.shot}
                    text={project.text}
                    code={project.code}
                    tech={project.tech}
                    demo={project.demo}
                    revr={index%2==1} />
                )
            }
        </div>
    </div>
  )
}

export default Projects