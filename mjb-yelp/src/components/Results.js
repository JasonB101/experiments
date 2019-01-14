import React from 'react'
import Link from "./Link"

const Results = ({ toRender }) => {
    const links = toRender.map((link, i) => <Link key={i}{...link}/>)
    return(
    <div className="results">
        {links}
    </div>
    )
}


export default Results
