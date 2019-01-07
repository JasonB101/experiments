import React from "react"




class Story extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="storyWrapper">
                <h3>{this.state.title}</h3>
                <img className="storyImage" alt="Headline Story" src={this.state.imgUrl}></img>
                <p className="content">this.state.content}</p>
            </div>
        )
    }


}



export default Story