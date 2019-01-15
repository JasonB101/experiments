import React from 'react'
import Link from "./Link"

const Results = ({ toRender, handleClick }) => {
    const links = toRender.map((link, i) => <Link handleClick={handleClick} key={i}{...link}/>)
    return(
    <div className="results">
        {links}
    </div>
    )
}


export default Results
