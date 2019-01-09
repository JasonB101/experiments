import React from "react"

const Shift = ({ direction, ...props }) => {
    return (
        <div {...props} className="shift">{direction === "right" ? ">" : "<"}</div>
    )

}

export default Shift