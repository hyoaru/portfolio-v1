import { useState, useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

function AnimationWipeOnShow(props) {
    const animationDelay = props.animationDelay ? props.animationDelay : 0.25
    
    const ref = useRef(null)
    const isInView = useInView(ref)
    const mainControls = useAnimation()
    const wipeControls = useAnimation()

    let wipeVariantHidden = null
    let wipeVariantVisible = null
    if (props.wipeDirection == "top") {
        wipeVariantHidden = {top: 0}
        wipeVariantVisible = {top: "100%"}
    } else if (props.wipeDirection == "bottom") {
        wipeVariantHidden = {bottom: 0}
        wipeVariantVisible = {bottom: "100%"}
    } else if (props.wipeDirection == "right") {
        wipeVariantHidden = {right: 0}
        wipeVariantVisible = {right: "100%"}
    } else {
        wipeVariantHidden = {left: 0}
        wipeVariantVisible = {left: "100%"}
    }

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            wipeControls.start("visible")
        } else {
            mainControls.start("hidden")
            wipeControls.start("hidden")
        }
    }, [isInView])

    return (
        <>
            <span ref={ref} style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
                <motion.span
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}

                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: animationDelay }}
                >
                    {props.children}
                </motion.span>

                <motion.span
                    variants ={{
                        hidden: wipeVariantHidden,
                        visible: wipeVariantVisible
                    }}

                    initial = "hidden"
                    animate = {wipeControls}
                    transition = {{ duration: 0.5, ease: "easeIn", delay: animationDelay - (animationDelay / 1.3)}}
                    style = {Object.assign({
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        borderRadius: props.borderRadius,
                        background: props.bgColor ? props.bgColor : "#eeeeee",
                        zIndex: 20,
                    }, props.additionalStyles)}
                >
                    
                </motion.span>
            </span>
        </>
    )
}

export default AnimationWipeOnShow