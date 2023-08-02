import React from 'react'

function SocialLinks(props) {
    return (
        <>
            <a href={props.link} key={props.name} target="_blank" className={"text-white text-decoration-none d-flex flex-row align-items-center me-4 mb-3 " + props.anchorClass}>
                <i className={"fa-brands fs-3 pe-3 " + props.iconClass}></i>
                <small>{props.label}</small>
            </a>
        </>
    )
}

export default SocialLinks