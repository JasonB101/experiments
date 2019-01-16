import React, { Component } from 'react'
import Papa from 'papaparse'
const fs = require('fs')

export default class Form extends Component {
    constructor() {
        super()
        this.state = {}
        this.readFile = this.readFile.bind(this)
    }



    readFile(e) {
        const file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsText(file)
        reader.onload = (e) => {
            let data = e.target.result
            let result = Papa.parse(data, { header: true }).data
            

        }
        reader.onerror = () => {
            alert(`Unable to read ${file.fileName}`)
        }
    }

    render() {
        return (
            <div>
                <h3>Import CSV File</h3>
                <input type="file" id="fileInput" onChange={this.readFile}></input>

            </div>
        )
    }
}
