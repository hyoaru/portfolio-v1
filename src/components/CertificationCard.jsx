import { motion, useInView, useAnimation } from "framer-motion"
import { useState, useRef } from "react"

// App imports
import AnimationWipeOnShow from '../animations/AnimationWipeOnShow'
import AnimationFadeOnShow from '../animations/AnimationFadeOnShow'

function CertificationCard(props) {
    const anchorImageOriginalRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.25 }}
                onMouseOver={() => { setIsHovered(true) }}
                onMouseOut={() => { setIsHovered(false) }}
                onClick={() => {anchorImageOriginalRef.current.click()}}
            >
                <AnimationFadeOnShow animationDelay={0.3}>
                    <div className="mb-4" key={props.title} style={{ width: '20.5rem', cursor: 'pointer' }} >
                        <div className={isHovered ? "card rounded-5 border border-secondary" : "card rounded-5"}>
                            <img src={props.imageShrinked} alt="" className="img-fluid rounded-5 rounded-bottom-0" style={{ height: '210px', objectFit: 'cover' }}></img>
                            <div className="card-body p-4">
                                <h5 className="card-title mb-3">{props.title}</h5>
                                <div className="d-flex flex-row flex-wrap">
                                    {props.tags.map((tag) => (
                                        <small className="border border-secondary-subtle rounded-1 px-2 me-1 mb-1" key={tag}>
                                            {tag}
                                        </small>
                                    ))}
                                </div>
                                <a ref={anchorImageOriginalRef} href={props.imageOriginal} target="_blank" className="d-none btn btn-sm rounded-3 p-1 px-3 mt-3 btn-dark mt-2">View</a>
                            </div>
                        </div>
                    </div>
                </AnimationFadeOnShow>
            </motion.div>
        </>
    )
}

export default CertificationCard