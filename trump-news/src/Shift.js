import React from "react"

class Shift extends React.Component{
    constructor(props){
        super()
        this.state = props
        this.handleClick = this.handleClick.bind()
    }
handleClick(){

}

render() {
    return (
        <div className="shift">{this.state.direction === "right" ? ">" : "<"}</div>
    )

}
}

export default Shift