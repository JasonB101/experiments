import React from 'react'



const ControlPanel = ({ readFile, ...props }) => {
    const locations = props.reviews ? props.reviews.map((review, i) => <option key={i}>{review.locationName}</option>) : null

    return (
        <div className="control-panel">
            {/* <h3>Import CSV File</h3>
            <input type="file" id="fileInput" onChange={readFile}></input> */}
            <h3>Import ZipCodes File</h3>
            <input type="file" id="fileInput" onChange={readFile}></input>
            <br></br>
            <h3>Keyword Search</h3>
            <input onChange={(e) => props.searchFunction("keyword", e.target.value)} 
                type="text" placeholder="Enter Keyword" value={props.search.keyword}>
            </input>
            <br></br>
            <h3>Location:</h3>
            <select onChange={(e) => props.searchFunction("location", e.target.value)} name="locationSelect">
                <option>All</option>
                {locations}
            </select>
            <br></br>
            <h3>Rating:</h3>
            <select onChange={(e) => props.searchFunction("rating", e.target.value)} name="ratingSelect">
                <option>All</option>
                <option>1 Star</option>
                <option>2 Star</option>
                <option>3 Star</option>
                <option>4 Star</option>
                <option>5 Star</option>
            </select>

        </div>
    )
}

export default ControlPanel
