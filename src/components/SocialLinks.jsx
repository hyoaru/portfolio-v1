import React from 'react'

function SocialLinks(props) {

    return (
        <>
            <a href={props.link} key={props.name} target="_blank" className={`text-white text-decoration-none d-flex flex-row align-items-center me-4 mb-3 mb-1 ${!props.link && 'pe-none'}`}>
                <img width={30} height={30} src={`https://cdn.simpleicons.org/${props.icon}/ffffff`} className='me-2' alt="" />
                <small>{props.label}</small>
            </a>
        </>
    )
}

export default SocialLinks