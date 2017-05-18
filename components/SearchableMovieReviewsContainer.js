import React from 'react'
import 'whatwg-fetch'

import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      search: '',
      reviews: []
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=${this.state.search}&api-key=9ea7a05233474bdcaa4f99ae8903d7ff`, {
      mode: 'cors',
      method: 'GET'
    }).then( response => {
      response.json().then( data => {
        console.log(data.results)
        return this.setState({
          reviews: data.results
        })
      })
    })
  }

  handleSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews col m6">
        <form onSubmit={this.handleSubmit.bind(this)} >
          <div className="input-field">
            <input type="text" onChange={this.handleSearch.bind(this)} />
          </div>
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
