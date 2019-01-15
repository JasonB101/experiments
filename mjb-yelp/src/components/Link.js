import React from 'react'

// const headers = [locationName, link, thumbnail, location, category, reviewContent, reviewDate, rating]

const Link = ({ location, rating, handleClick, link, ...props}) => (
    <div className="linkBox" onClick={() => handleClick(link)} title={link}>
        <h3>{props.locationName}</h3>
        <p>{`${location ? location.substr(location.length - 8, location.length) : location} - ${props.reviewDate}`}</p>
        <img src={props.thumbnail} alt="Location"></img>
        <p className="rating">{rating ? Array(+rating.substr(0, 1))
            .fill("★").concat(Array(5 - +rating.substr(0, 1))
            .fill("☆")).join(" ") : null}</p>
    </div>
)

export default Link