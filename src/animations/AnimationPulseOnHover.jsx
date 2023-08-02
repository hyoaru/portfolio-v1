import { useState, useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

function AnimationPulseOnHover(props) {
    const [isHovered, setIsHovered] = useState(false)
    const mainControls = useAnimation()

    useEffect(() => {
        if (isHovered) {
            mainControls.start("animate")
        } else {
            mainControls.start("initial")
        }
    }, [isHovered])

    return (
        <>
            <motion.div
                variants={{
                    initial: {opacity: 1},
                    animate: {opacity: 0}
                }}

                initial="initial"
                animate={mainControls}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onMouseOver={() => {setIsHovered(true)}}
                onMouseOut={() => {setIsHovered(false)}}
            >
                {props.children}
            </motion.div>
        </>
    )
}

export default AnimationPulseOnHover