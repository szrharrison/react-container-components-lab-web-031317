import React from 'react'

const Review = ({display_title, headline, summary_short, link, multimedia, mpaa_rating}) => {
  const mpaa = mpaa_rating ? mpaa_rating : 'NR'
  return (
    <div className="review card">
      <div className="card-image">
        <img src={multimedia.src} />
        <span className="card-title">{display_title}: {mpaa}</span>
      </div>
      <div className="card-content">
        <h3>{headline}</h3>
        <p>{summary_short}</p>
      </div>
      <div className="card-action">
        <a href={link.url} target="_blank">{link.suggested_link_text}</a>
      </div>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map( movie => Review(movie) )}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: [{multimedia: {src: "#"}, link: {url: '#', suggested_link_text: '#'}}]
}

export default MovieReviews
