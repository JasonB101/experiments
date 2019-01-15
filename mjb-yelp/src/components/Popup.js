import React, { Component } from 'react'
// const headers = [locationName, link, thumbnail, location, category, reviewContent, reviewDate, rating]

export default class Popup extends Component {
    render() {
        return (
            <div className="popup" onClick={this.props.handleClick}>
                <div className="inner-popup" onClick={this.props.handleClick}> 
                    <h2>{this.props.locationName}</h2>
                    <p>{this.props.location}</p>
                    <p>{this.props.reviewDate}</p>
                    <p>{this.props.reviewContent}</p>
                    <img src=""></img>
                    <p className="exit" onClick={this.props.handleClick}>Close</p>
                </div>
                
            </div>
        )
    }
}
