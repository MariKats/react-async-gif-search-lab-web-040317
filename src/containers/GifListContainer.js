import React from 'react'
import 'whatwg-fetch'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const URL = `http://api.giphy.com/v1/gifs/search?q=`
const API = `&api_key=dc6zaTOxFJmzC`

export default class GifListContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      gifs: [],
      query: ""
    }
    this.fetchGifs = this.fetchGifs.bind(this)
    this.handleQuery = this.handleQuery.bind(this)
  }

  fetchGifs(event){
    event.preventDefault()
    fetch(URL + `${this.state.query}` + API)
    .then(response => response.json())
    .then(response => this.setState({ gifs: response.data.slice(0, 3)},
    () => console.log(this.state.gifs)))
  }

  handleQuery(event){
    this.setState({
      query: event.target.value
    }, () => console.log(this.state.query))
  }

  render(){
    return(
      <div>
        <GifSearch handleQuery={this.handleQuery} fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
