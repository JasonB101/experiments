import React, { Component } from 'react'
import axios from "axios"

export default class DataProvider extends Component {
    constructor(){
        super()
        this.state = {}
    }
    componentDidMount(){
        axios.get('http://localhost:8080/transformers').then(response => this.setState({
            transformers: JSON.stringify(response.data)
        }))
    }

    render() {
        return (
            <div>
                <p>{this.state.transformers}</p>
            </div>
        )
    }
}
