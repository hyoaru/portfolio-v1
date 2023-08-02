import React from 'react'
import { motion } from 'framer-motion'

function AnimationPulsePerpetual(props) {
    return (
        <>
            <motion.div
                animate={{ opacity: [0, 0.5, 1, 0.5, 0] }}
                transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
            >
                {props.children}
            </motion.div>
        </>
    )
}

export default AnimationPulsePerpetual