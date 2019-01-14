import React from "react"
import Story from "./Story"
import axios from "axios"
const url = (source, person) => {
    let d = new Date()
    let date = d.toISOString().slice(0, 10)
    return `https://newsapi.org/v2/everything?sources=${source === "cnn" ? "cnn" : "fox-news"}&apiKey=e215ccf353c643959c6fe44639bb5fc3&q=${person}&from=${date}&sortBy=popularity`;
}
class Handler extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fox: [],
            cnn: [],
            foxIndex: 0,
            cnnIndex: 0
        }
        this.shift = this.shift.bind(this)
        this.goUrl = this.goUrl.bind(this)
    }

    shift(direction, network) {
        const nIndex = network + "Index"
        this.setState(ps => {
            switch (direction === "left" ? 1 : 2) {
                case 1:
                    if (ps[nIndex] > 0) {
                        this.setState({
                            [nIndex]: ps[nIndex] - 1
                        })
                    }
                    break;

                case 2:
                    if (ps[nIndex] < ps[network].length - 1) {
                        this.setState({
                            [nIndex]: ps[nIndex] + 1
                        })
                    }
                    break;

                default:
                    break;
            }
        })

    }

    goUrl(url){
        const win = window.open(url, '_blank');
            win.focus();
    }

    componentDidMount() {
        axios.get(url("fox", "Trump")).then((response) => {
            this.setState({
                fox: response.data.articles
            })
        })
        axios.get(url("cnn", "Trump")).then((response) => {
            this.setState({
                cnn: response.data.articles
            })
        })

    }

    render() {
        return (
            <div>
                <h2>CNN</h2>
                <Story onClick={(url) => this.goUrl(url)}shiftFunc={this.shift}{...this.state.fox[this.state.cnnIndex]} network="cnn" />
                <br></br>
                <h2>FOX</h2>
                <Story onClick={(url) => this.goUrl(url)}shiftFunc={this.shift}{...this.state.cnn[this.state.foxIndex]} network="fox" />

            </div>
        )
    }
}

export default Handler