import React from "react"

class Box extends React.Component{
    constructor(){
        super()
        this.state = {
            currentRoll: "Click that shit!",
            prevRolls: []
        }
        this.handleClick = this.handleClick.bind(this)
    }
    genRando(){
        return Math.floor(Math.random() * 6 + 1)
    }
    handleClick(){
        const x = this.genRando()
        this.setState(prevState => ({
            currentRoll: x,
            prevRolls: [...prevState.prevRolls, x]
        } ))
    }
    render(){
        const displayRolls = this.state.prevRolls.map((num, i)=> <li key={i}>{num}</li>)
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.currentRoll}</h1>
                <ul>
                    {displayRolls}
                </ul>
            </div>
        )
    }
}

export default Box