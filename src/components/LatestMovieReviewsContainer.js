import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
import React, { Component } from 'react'

export default class LatestMovieReviewsContainer extends Component {
    state={
        reviews: []
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
