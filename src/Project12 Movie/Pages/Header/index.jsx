import React,{useState,useEffect} from 'react'
import {Axios} from '../../Axios'
import './index.css'

const Header = ({url}) => {
  const [movie, setMovie] = useState({})

  const Image_Url = `https://image.tmdb.org/t/p/original`

  useEffect(()=>{
    async function fetchData(){
      const request = await Axios.get(url)
      const results = request.data.results
      setMovie(results[Math.floor(Math.random() * results.length)])
    }
    fetchData()
  }, [url])

  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${Image_Url}${movie?.backdrop_path})`
      }}
    >
      <div className="header__content">
        <h1 className="header__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="header__buttons">
          <button className="btn play">▶ Play</button>
          <button className="btn info">More Info</button>
        </div>

        <p className="header__description">
          {movie?.overview}
        </p>
      </div>

      <div className="header--fadeBottom"></div>
    </header>
  )
}

export default Header
