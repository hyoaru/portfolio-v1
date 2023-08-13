import React from 'react'
import { motion } from "framer-motion"
import Axios from 'axios';
import fileDownload from 'js-file-download';

// App imports
import { navigationMapList } from './data/Navigation'
import AnimationPulseOnHover from '../animations/AnimationPulseOnHover'

function downloadFromURL(url, filename) {
    Axios.get(url, {
        responseType: 'blob',
    }).then(res => {
        fileDownload(res.data, filename);
    });
}

function Sidebar() {
    const resumeURL = `${import.meta.env.VITE_PORTFOLIO_RESOURCES_REPOSITORY_URL}/assets/documents/resume.pdf`
    const resumeDownloadFileName = "Cabrera_Jenjade_Resume.pdf"

    return (
        <>
            <div className="sticky-top" style={{ top: '8rem' }}>
                <ul className="nav flex-column">
                    <li className="nav-item d-none d-lg-block">
                        <a href="#" className="nav-link text-secondary fw-bold pe-none text-uppercase font-monospace fs-4">JCabrera</a>
                    </li>

                    {navigationMapList.map((navigation) => (
                        <li className="nav-item" key={navigation.navigationID}>
                            <motion.a href={navigation.navigationID} className="nav-link text-dark fw-bold fs-5" whileHover={{ opacity: "68%" }} transition={{ duration: 0.3 }}>
                                {navigation.navigationName}
                            </motion.a>
                        </li>
                    ))}

                    <div className="dropdown">
                        <button className="btn nav-link text-dark fw-bold fs-5 dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Download
                        </button>
                        <ul className="dropdown-menu">
                            <a className="dropdown-item" onClick={() => { downloadFromURL(resumeURL, resumeDownloadFileName) }}>Resume</a>
                            <a href="#" className="dropdown-item">Curriculum Vitae</a>
                        </ul>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Sidebar