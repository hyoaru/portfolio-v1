import React, { useEffect, useState, useRef } from 'react'

// App imports
import TechnologyBadge from '../components/TechnologyBadge'
import AnimationWipeOnShow from '../animations/AnimationWipeOnShow'

function MainSection() {
    const visitorBadgeURL = "https://api.visitorbadge.io/api/visitors?path=github.com%2Fhyoaru&label=VISITORS&labelColor=%23000000&countColor=%23eeeeee&style=flat-square&labelStyle=upper"
    const visitorBadgeURLHref = "https://github.com/hyoaru"
    const [technologies, setTechnologies] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_PORTFOLIO_RESOURCES_REPOSITORY_URL}/technologies.json`)
        .then((response) => response.json())
        .then((json) => {setTechnologies(json)})
    }, [])

    return (
        <>
        <div className="row">
            <div className="d-flex">
                <div className="">
                    <img className='rounded-5 shadow-lg' src={`${import.meta.env.VITE_PORTFOLIO_RESOURCES_REPOSITORY_URL}/assets/images/main_image_shrinked.jpg`} alt="" />
                </div>

                <div className="ps-4 ps-sm-5 mt-3">
                    <small className="text-secondary mb-2">An idiot sandwich from the philippines</small>
                    <h3 className="mt-2 text-uppercase fw-bold font-monospace fs-auto">
                        I am {""}
                        <AnimationWipeOnShow>
                            <span className="bg-dark text-white">Jen Jade Cabrera</span>
                        </AnimationWipeOnShow>
                        , a programmer, graphic designer, layout artist, and a data scientist in the making.
                    </h3>
                    
                    <div className="d-none d-md-block">
                        <small className="text-secondary mt-3 mb-2 d-block">Technologies I work and used to work with</small>
                        <div>
                            {technologies.map((technology) => (
                                <TechnologyBadge 
                                    key = {technology.technologyName}
                                    technologyName = {technology.technologyName}
                                    bgColor = {technology.bgColor}
                                    technologyLogo = {technology.technologyLogo}
                                    logoColor = {technology.logoColor}
                                />
                            ))}
                        </div>
                        <div className="mt-3">
                            <a href={visitorBadgeURLHref} target='_blank'>
                                <img src={visitorBadgeURL}></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-block d-md-none mt-4">
                <small className="text-secondary mb-1 mt-2">Technologies</small>
                <div>
                    {technologies.map((technology) => (
                        <TechnologyBadge 
                            key = {technology.technologyName}
                            technologyName = {technology.technologyName}
                            bgColor = {technology.bgColor}
                            technologyLogo = {technology.technologyLogo}
                            logoColor = {technology.logoColor}
                        />
                    ))}
                </div>
                <div className="mt-3">
                    <a href={visitorBadgeURLHref} target='_blank'>
                        <img src={visitorBadgeURL}></img>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainSection