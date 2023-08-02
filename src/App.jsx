import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"

// App imports
import { verticalSpace } from './Utilities';
import AnimationWipeOnShow from './animations/AnimationWipeOnShow';
import AnimationPulsePerpetual from './animations/AnimationPulsePerpetual';

import Header from "./elements/Header";
import Sidebar from './elements/Sidebar';
import MainSection from './sections/MainSection';
import ProjectsSection from './sections/ProjectsSection';
import AboutSection from './sections/AboutSection';
import CertificationSection from './sections/CertificationSection';
import ContactSection from './sections/ContactSection';

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])

    return (
        <>
            {
                isLoading ?

                    <motion.div
                        className="d-flex"
                        style={{width: "100vw", height: "85vh"}}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 3}}
                    >
                        <div className='mx-auto my-auto d-flex flex-column'>
                            <span className='text-uppercase fw-light fs-3 text-center font-monospace mb-4'>Loading</span>
                            <div className='spinner-border mx-auto' style={{width: '5rem', height: '5rem'}}></div>
                        </div>
                    </motion.div>
                :
                    <AnimatePresence>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1.5}}
                        >
                            <Header />
                            <div className="container">
                                <div className="row px-3">
                                    <aside className="col-12 col-lg-2 bg-white d-none d-lg-block d-xl-block">
                                        <Sidebar />
                                    </aside>
                                    <main className="col-12 col-lg-10 mt-5">
                                        {verticalSpace(3, "d-block d-lg-none")}
                                            <div id="sectionMain">
                                                {verticalSpace(4.5, "d-none d-lg-block")}
                                                <MainSection />
                                                {verticalSpace(4)}
                                            </div>
                                        <div id="gotoSectionProjects">
                                            <a href="#sectionProjects" className="text-decoration-none text-dark row text-center">
                                                <small className="font-monospace text-uppercase">Scroll Down</small>
                                                <AnimationPulsePerpetual>
                                                    <i className="bi bi-arrow-down-circle fs-3"></i>
                                                </AnimationPulsePerpetual>
                                            </a>
                                            {verticalSpace(8)}
                                        </div>
                                        <div id="sectionProjects">
                                            {verticalSpace(4)}
                                            <ProjectsSection />
                                            {verticalSpace(12)}
                                        </div>
                                        <div id="sectionAbout">
                                            {verticalSpace(3)}
                                            <AboutSection />
                                            {verticalSpace(12)}
                                        </div>
                                        <div id="sectionCertifications">
                                            {verticalSpace(3)}
                                            <CertificationSection />
                                            {verticalSpace(12)}
                                        </div>
                                        <div id="sectionContact">
                                            {verticalSpace(3)}
                                            <ContactSection />
                                        </div>
                                    </main>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
            }
        </>
    )
}

export default App
