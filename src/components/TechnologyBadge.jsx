import React from 'react'

function TechnologyBadge(props) {
    const url = `https://img.shields.io/badge/-${props.technologyName}-%23eeeeee?style=flat-square&logo=${props.technologyLogo}&logoColor=black`

    return (
        <>
            <img src={url} alt="" className="me-1 mb-1" />
        </>
    )
}

export default TechnologyBadge;