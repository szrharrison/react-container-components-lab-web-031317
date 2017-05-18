import React from 'react'
import 'whatwg-fetch'

import MovieReviews from './MovieReviews'

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=9ea7a05233474bdcaa4f99ae8903d7ff', {
      mode: 'cors',
      method: 'GET'
    }).then( response => {
      response.json().then( data => {
        return this.setState({
          reviews: data.results
        })
      })
    })
  }

  render() {
    return (
      <div className="latest-movie-reviews col m6">
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
