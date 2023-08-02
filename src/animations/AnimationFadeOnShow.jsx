import { useState, useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

function AnimationFadeOnShow(props) {
    const animationDelay = props.animationDelay ? props.animationDelay : 0.25
    const ref = useRef(null)
    const isInView = useInView(ref)
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        } else {
            mainControls.start("hidden")
        }
    }, [isInView])

    return (
        <>
            <span ref={ref} style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: animationDelay }}
                >
                    {props.children}
                </motion.div>
            </span>
        </>
    )
}

export default AnimationFadeOnShow