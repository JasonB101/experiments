import React from "react"
import Story from "./Story"

const url = (source, person) => {
    let d = new Date()
    let date = d.toISOString().slice(0, 10)
    return `https://newsapi.org/v2/everything?sources=${source === "cnn" ? "cnn" : "fox-news"}&apiKey=e215ccf353c643959c6fe44639bb5fc3&q=${person}&from=${date}&sortBy=popularity`;
}

const App = () => (
    <div className="app-wrapper">
        <h1>Trump News</h1>
        <h2>Fox News</h2>
        <Story />
        <h2>CNN News</h2>
        <Story />
    </div>
)

export default App
