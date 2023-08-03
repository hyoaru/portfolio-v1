import React from 'react'
import { motion } from 'framer-motion'

function AnimationPulsePerpetual(props) {
    return (
        <>
            <motion.div
                animate={{ opacity: [0.1, 0.3, 0.5, 0.7, 1, 0.7, 0.5, 0.3, 0.1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                {props.children}
            </motion.div>
        </>
    )
}

export default AnimationPulsePerpetual