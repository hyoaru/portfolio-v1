import React from 'react'

function TechnologyBadge(props) {
    const url = `https://img.shields.io/badge/-${props.technologyName}-%23${props.bgColor}?style=flat-square&logo=${props.technologyLogo}&logoColor=${props.logoColor}`

    return (
        <>
            <img src={url} alt="" className="me-1 mb-1" />
        </>
    )
}

export default TechnologyBadge;