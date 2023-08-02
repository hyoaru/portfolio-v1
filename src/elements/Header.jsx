import React from 'react'

// App imports
import { navigationMapList } from './data/Navigation'

function Header() {

    return (
        <>
            <header className="bg-white fixed-top d-block d-md-block d-lg-none pt-3">
                <nav className="navbar">
                    <div className="container px-4">
                        <a href="#" className="navbar-brand text-uppercase font-monospace fw-bold mt-1">JCabrera</a>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="nav">
                            <ul className="navbar-nav">

                                {navigationMapList.map((navigation) => (
                                    <li className="nav-item" key={navigation.navigationID}>
                                        <a href={navigation.navigationID} className="px-2 nav-link text-dark fw-bold">{navigation.navigationName}</a>
                                    </li>
                                ))}

                                <div className="dropdown">
                                    <button className="btn px-2 nav-link text-dark fw-bold dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                        Download
                                    </button>
                                    <ul className="dropdown-menu">
                                        <a href="#" className="dropdown-item">Resume</a>
                                        <a href="#" className="dropdown-item">Curriculum Vitae</a>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header