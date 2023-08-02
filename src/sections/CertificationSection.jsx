import { useState, useRef, useEffect } from "react"

// App imports
import AnimationWipeOnShow from "../animations/AnimationWipeOnShow"
import CertificationCard from "../components/CertificationCard"


function CertificationSection() {
    const [certifications, setCertifications] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_PORTFOLIO_RESOURCES_REPOSITORY_URL}/certifications.json`)
            .then((response) => response.json())
            .then((json) => setCertifications(json))
    }, [])

    return (
        <>
            <h4 className="text-uppercase fw-bold font-monospace mb-4">
                <AnimationWipeOnShow>
                    Certifications
                </AnimationWipeOnShow>
            </h4>

            <div className="ms-0 ms-sm-0 ms-lg-4">
                <div className="d-flex flex-wrap justify-content-around">
                    {certifications.map((certification, index) => (
                        <CertificationCard 
                            key = {certification.title}
                            index = {index + 1}
                            title = {certification.title}
                            tags = {certification.tags}
                            imageShrinked = {certification.imageShrinked}
                            imageOriginal = {certification.imageOriginal}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default CertificationSection