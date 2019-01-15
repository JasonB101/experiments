import React, { Component } from 'react'
import Papa from "papaparse"
import Results from "./Results"
import ControlPanel from './ControlPanel';
import Popup from "./Popup"




class MainView extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            search: {
                keyword: "",
                location: "All",
                rating: "All"
            },
            showPopup: false,
            popupLink: ""
        }
        this.readFile = this.readFile.bind(this)
        this.search = this.search.bind(this)
        this.filterArray = this.filterArray.bind(this)
        this.togglePopup = this.togglePopup.bind(this)
        this.populatePopup = this.populatePopup.bind(this)
        this.generatePopup = this.generatePopup.bind(this)
    }
    componentDidMount() {

    }

    populatePopup(link){
        this.setState({
            popupLink: link
        })
        this.togglePopup()
    }

    togglePopup() {
        this.setState(ps => ({
          showPopup: !ps.showPopup
        }))
      }

    search(name, value) {
        this.setState(ps => (
                {
                    search: {
                        ...ps.search,
                        [name]: value
                    }
        }))
            }

    readFile(e) {
        const file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsText(file)
        reader.onload = (e) => {
            let data = e.target.result
            let result = Papa.parse(data, { header: true }).data
            this.setState({
                reviews: result,
            })
        }
        reader.onerror = () => {
            alert(`Unable to read ${file.fileName}`)
        }
    }

    filterArray(array) {
        return array.filter(review => {

            let keywordString = this.state.search.keyword
            if (review.locationName && review.reviewContent && review.location) {
                if (review.locationName.includes(keywordString) ||
                    review.reviewContent.includes(keywordString) ||
                    review.location.includes(keywordString)) {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        }
        )

    }

    generatePopup(array){
        return array.find(x => {
            if(x.link === this.state.popupLink){
            return true
            } else {
                return false
            }
        })
    }

    render() {

        return (
            <div className="main-view">
                <ControlPanel searchFunction={this.search} readFile={this.readFile} {...this.state} />
                <Results handleClick={this.populatePopup}toRender={this.filterArray(this.state.reviews)} />
                {this.state.showPopup ? <Popup handleClick={this.togglePopup} {...this.generatePopup(this.state.reviews)}/> : null}
            </div>
        )
    }
}

export default MainView