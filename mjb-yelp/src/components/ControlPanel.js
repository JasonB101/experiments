import React from 'react'



const ControlPanel = ({ readFile, ...props }) => {
const locations = props.reviews ? 
props.reviews.map((review, i) => <option key={i}>{review.locationName.length < 20 ? 
review.locationName : review.locationName.substr(0, 20) + '...' }</option>) : null
    
    return (
    <div className="control-panel">
        <h3>Import CSV File</h3>
        <input type="file" name="inputFile" id="fileInput" onChange={readFile}></input>
        <br></br>
        <h3>Keyword Search</h3>
        <input type="text" placeholder="Enter Keyword"></input>
        <br></br>
        <h3>Location:</h3>
        <select name="locationSelect">
        
            {locations}
        </select>
        <br></br>
        <h3>Rating:</h3>
        <select name="ratingSelect">
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
