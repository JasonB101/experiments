import React, { Component } from 'react'
// const headers = [locationName, link, thumbnail, location, category, reviewContent, reviewDate, rating]

export default class Popup extends Component {
    render() {
        return (
            <div className="popup" id="outter-popup"  onClick={(e) => {
                console.dir(e.target)
                const target = e.target.id ? e.target.id : null
                if (target === "exit-button" || target === "outter-popup"){
                this.props.handleClick()
                }
                }}>
                <div className="inner-popup" > 
                    <h2>{this.props.locationName}</h2>
                    <img src={this.props.thumbnail}></img>
                    <p>{this.props.cityState}</p>
                    <p>{this.props.reviewDate}</p>
                    <p>{this.props.reviewContent}</p>
                    
                    <p className="exit" id="exit-button" >Close</p>
                </div>
                
            </div>
        )
    }
}
