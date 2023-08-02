import React from 'react'

function InterestTag(props) {
    return (
        <>
            {console.log(props.former)}
            <div className="col-12 col-lg-6 border-start">
                <small className="d-block">{props.name}: <span className={props.former ? "text-decoration-line-through text-secondary" : "text-secondary"}>{props.bits}</span></small>
            </div>
        </>
    )
}

export default InterestTag