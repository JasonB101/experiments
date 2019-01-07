import React from "react"
import Joke from "./components/Joke"
import jokeData from "./jokeData"


const App = () => {
    let jokes = jokeData.map((x, i) => {
        return <Joke key={i} {...x} />
    })
    console.log(jokes)
    
    return (
        <div>
        {jokes}
        </div>
    )
}

export default App