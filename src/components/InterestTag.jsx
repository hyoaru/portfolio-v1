import React from 'react'

function InterestTag(props) {

    console.log(props.bits.join())
    return (
        <>
            <div className="col-12 col-lg-6 border-start">
                <small className="d-block text-wrap">
                    {`${props.name} `}
                    <span className={props.former ? "text-decoration-line-through text-secondary" : "text-secondary"}>
                        {`[${props.bits.join(', ')}]`}
                    </span>
                </small>
            </div>
        </>
    )
}

export default InterestTag