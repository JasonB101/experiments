import React, { Component } from 'react'
import Papa from "papaparse"
import Results from "./Results"
import ControlPanel from './ControlPanel';
import Popup from "./Popup"
import hashTable from "./zip-hash-table.json"
import Loading from "./Loading"


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
            popupLink: "",
            loading: false
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

    populatePopup(link) {
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
        this.setState({
            loading: true
        })
        const file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsText(file)
        reader.onload = (e) => {
            let data = e.target.result
            let result = Papa.parse(data, { header: true }).data
            
            const zipResults = result.map((x, i) => {

                let zipCode = x.location ? x.location.substr(x.location.length - 5, 5) : "Unknown"
                let cityState = hashTable[zipCode] ? hashTable[zipCode].toLowerCase().split(" ").map((word, i, a) => {
                        return i === a.length - 1 ? word.toUpperCase() : word.substr(0, 1).toUpperCase() + word.substr(1, word.length)}).join(" ") : null



                return {
                    ...x,
                    cityState: cityState,
                }
            })

            console.log(zipResults)
            this.setState({
                reviews: zipResults,
                loading: false
            })
        }
        reader.onerror = () => {
            alert(`Unable to read ${file.fileName}`)
        }
    }

    filterArray(array) {
        return array.filter(review => {

            let keywordString = this.state.search.keyword
            let locationString = this.state.search.location
            let ratingString = this.state.search.rating

            if (review.locationName && review.reviewContent && review.location) {
                
                //Search conditions to filter reviews
                if ((review.locationName.includes(keywordString) ||
                    review.reviewContent.includes(keywordString) ||
                    review.location.includes(keywordString))     && 
                    (review.rating.substr(0, 1) ===  ratingString.substr(0, 1) ||
                    ratingString === "All") && (review.locationName.includes(locationString) ||
                    locationString === "All")) {
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

    generatePopup(array) {
        return array.find(x => {
            return x.link === this.state.popupLink ? true : false
           })
        }

    render() {

        return (
            <div className="main-view">
                <ControlPanel searchFunction={this.search} readFile={this.readFile} {...this.state} />
                <Loading {...this.state}>
                    <Results handleClick={this.populatePopup} toRender={this.filterArray(this.state.reviews)} />
                    {this.state.showPopup ? <Popup handleClick={this.togglePopup} {...this.generatePopup(this.state.reviews)} /> : null}
                </Loading>
            </div>
        )
    }
}

export default MainView