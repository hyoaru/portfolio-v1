import React from 'react'
import { useState, useEffect } from 'react'

// App imports
import InterestTag from '../components/InterestTag'
import SocialLinks from '../components/SocialLinks'
import AnimationFadeOnShow from '../animations/AnimationFadeOnShow'
import AnimationWipeOnShow from '../animations/AnimationWipeOnShow'

function AboutSection() {
    const [interests, setInterests] = useState([])
    const [socials, setSocials] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_PORTFOLIO_RESOURCES_REPOSITORY_URL}/interests.json`)
        .then((response) => response.json())
        .then((json) => setInterests(json))

        fetch(`${import.meta.env.VITE_PORTFOLIO_RESOURCES_REPOSITORY_URL}/socials.json`)
        .then((response) => response.json())
        .then((json) => setSocials(json))
    }, [])

    return (
        <>
            <AnimationWipeOnShow borderRadius = {"1.8rem"}>
                <div className="bg-dark py-5 p-4 p-sm-5 rounded-5 text-white" >
                    <div className="container-fluid">
                        <div className="mb-4">
                            <h4 className="text-uppercase fw-bold font-monospace mb-3">
                                <AnimationFadeOnShow >
                                    About
                                </AnimationFadeOnShow>
                            </h4>
                            <AnimationFadeOnShow >
                                <p>Hailing from the Philippines, I am 20 years old and currently a 2nd year college student studying under the program of Bachelor of Science in Computer Science. <span className="fw-bold">Being someone with almost unsatiable curiosity</span>, I have quite the knack for studying topics that is subject even outside the field of computer science, such as society, linguistics, mathematics<span className="text-secondary">─which I suck at</span>, and some other fields.</p>
                            </AnimationFadeOnShow>
                        </div>
                        <div className="mb-4">
                            <AnimationFadeOnShow >
                                <p className="fw-semibold">Currently dipping my toes on:</p>
                                <div className="ps-3 ms-0 ms-sm-2 row">
                                    {interests.map((interest) => (
                                        <InterestTag
                                            key = {`interest_${interest.name}`}
                                            name = {interest.name}
                                            bits = {interest.bits}
                                            former = {interest.former}
                                        />
                                    ))}
                                </div>
                            </AnimationFadeOnShow>
                        </div>
                        <div className="mb-3">
                            <AnimationFadeOnShow >
                                <p className="fw-semibold">My socials:</p>
                                <div className="ms-3 d-flex flex-wrap">
                                    {socials.map((social) => (
                                        <SocialLinks
                                            key = {`social_${social.name}`}
                                            link = {social.link}
                                            label = {social.label}
                                            anchorClass = {social.anchorClass}
                                            iconClass = {social.iconClass}
                                        />
                                    ))}
                                </div>
                            </AnimationFadeOnShow>
                        </div>
                    </div>
                </div>
            </AnimationWipeOnShow>
        </>
    )
}

export default AboutSection