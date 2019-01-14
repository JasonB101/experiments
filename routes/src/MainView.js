import React from "react"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Contact from "./Contact"
import { Switch, Route } from "react-router-dom"

const MainView = () => {
    return(
        <div className="main">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </div>
    )
}

export default MainView