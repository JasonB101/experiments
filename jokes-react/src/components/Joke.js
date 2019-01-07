import React from "react"

const Joke = (props) => {
    return (
        <div className="box">
        {props.question ? <p>{props.question}</p> : null}
        {props.punchLine ? <p>{props.punchLine}</p> : null}
        <hr/>
        </div>
    )
}

export default Joke