// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Movies = ({sample}) => {
  return (
    <div className="movie">
          <div>
            <p>{sample.Year}</p>
          </div>

          <div>
            <img src={sample.Poster !== 'N/A' ? sample.Poster : 'https://via.placeholder.com/400'} alt={sample.Title} />
          </div>
          <div>
            <span>{sample.Type}</span>
            <h3>{sample.Title}</h3>
          </div>
        </div>
     
  )
}

export default Movies

