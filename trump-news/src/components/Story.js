import React from "react"
import Shift from "./Shift"




const Story = ({ url, title, urlToImage, description, shiftFunc, network, onClick }) => {

        return (
            <div className="storyWrapper">
                <Shift direction="left" onClick={() => shiftFunc("left", network)} />
                <div onClick={() => onClick(url)}className="contentWrapper">
                <h3>{title}</h3>
                <img className="storyImage" alt="Headline Story" src={urlToImage}></img>
                <p className="description">{description ? description.slice(0, 300) + (description.length > 300 ? "..." : "") : "Story has no description"}</p>
                </div>
                <Shift direction="right" onClick={() => shiftFunc("right", network)} />
            </div>
        )


}



export default Story