import React from "react"
import Shift from "./Shift"




const Story = ({ title, urlToImage, content, shiftFunc, network }) => {

        return (
            <div className="storyWrapper">
                <Shift direction="left" onClick={() => shiftFunc("left", network)} />
                <div className="contentWrapper">
                <h3>{title}</h3>
                <img className="storyImage" alt="Headline Story" src={urlToImage}></img>
                <p className="content">{content ? content.slice(0, 200) + "..." : "Story has no content"}</p>
                </div>
                <Shift direction="right" onClick={() => shiftFunc("right", network)} />
            </div>
        )


}



export default Story