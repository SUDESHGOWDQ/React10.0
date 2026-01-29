import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {Axios} from '../../Axios'
import './index.css'

const index = ({url,title}) => {
	const[movies,setMovies] = useState([])

	const Image_Url = `https://image.tmdb.org/t/p/original/`

	useEffect(()=>{
		async function fetchData(){
			const request = await Axios.get(url)
			setMovies(request.data.results);	
		}
		fetchData()
	},[])

  return (
	<div className='Row_container'>
	<h2>{title}</h2>
	<div className='Row_poster'>
	{
		movies.map((item,index)=>{
			return(
				<Link to={`/movie/${item.id}`}><img key={item.id} src={`${Image_Url}${item.poster_path}`}/></Link>
			)
		})
	}
	</div>
	</div>
  )
}

export default index