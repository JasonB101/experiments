import React, { Component } from 'react'
import Papa from "papaparse"
import Results from "./Results"
import ControlPanel from './ControlPanel';




class MainView extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            search: {
                keyword: "",
                location: "",
                rating: ""
            }
        }
        this.readFile = this.readFile.bind(this)
    }
    componentDidMount(){
       
    }

    readFile(e){
        const file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsText(file)
        reader.onload = (e) => {
        let data = e.target.result
        let result = Papa.parse(data, {header: true}).data
        this.setState({
            reviews: result
        })
        }
        reader.onerror = () => {
            alert(`Unable to read ${file.fileName}`)
        }
    }

    render() {
        return (
            <div className="main-view">
                <ControlPanel readFile={this.readFile} {...this.state}/>
                <Results toRender={this.state.reviews}/>
            </div>
        )
    }
}

export default MainView