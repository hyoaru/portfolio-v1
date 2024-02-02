import React, { useEffect, useState } from 'react'

// App imports
import AnimationWipeOnShow from '../animations/AnimationWipeOnShow'
import AnimationFadeOnShow from '../animations/AnimationFadeOnShow'

function ProjectsSection() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_PORTFOLIO_RESOURCES_REPOSITORY_URL}/projects.json`)
            .then((response) => response.json())
            .then((json) => { setProjects(json) })
    }, [])

    return (
        <>
            <h4 className="text-uppercase fw-bold font-monospace mb-4">
                <AnimationWipeOnShow>
                    Projects
                </AnimationWipeOnShow>
            </h4>

            <AnimationFadeOnShow>
                <div className="ms-0 ms-sm-0 ms-lg-4 border-start border-end border-dark rounded-5 overflow-hidden">
                    <div id="projectsCarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            {projects.map((_, index) => (
                                <button key={`${_.title}_index_${index}`} type="button" data-bs-target="#projectsCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></button>
                            ))}
                        </div>
                        <div className="carousel-inner">
                            {projects.map((project, index) => (
                                <div className={"carousel-item ".concat(index === 0 ? "active" : "")} key={project.title}>
                                    <AnimationFadeOnShow>
                                    <img src={project.image} alt="" className="d-block object-fit-cover w-100 rounded-5 p-0 opacity-50"></img>
                                    </AnimationFadeOnShow>
                                    <div className="d-block d-md-none mt-5 mt-sm-0" style={{ height: '15em' }}></div>
                                    <div className="carousel-caption mb-4">
                                        <AnimationFadeOnShow animationDelay = {0.4}>
                                            <div className="pb-3">
                                                <h6 className="fw-bold">{project.title}</h6>
                                                <small>{project.description}</small>
                                            </div>
                                        {project.repositoryURL && <a href={project.repositoryURL} target="_blank" className="btn btn-sm btn-outline-dark ms-1 mb-2">Go to repository</a>}
                                        {project.liveURL && <a href={project.liveURL} target="_blank" className="btn btn-sm btn-outline-dark ms-1 mb-2">See live</a>}
                                        {project.processURL && <a href={project.processURL} target="_blank" className="btn btn-sm btn-outline-dark ms-1 mb-2">See live</a>}
                                        </AnimationFadeOnShow>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </AnimationFadeOnShow>

        </>
    )
}

export default ProjectsSection