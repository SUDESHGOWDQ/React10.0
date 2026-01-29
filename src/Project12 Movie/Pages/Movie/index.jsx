import React,{useState,useEffect} from 'react'
import {Axios} from '../../Axios'
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom'
import './index.css'

const index = () => {
	const {id} = useParams();
	const[movie,setMovie] = useState(null)
	const[trailer,setTrailer] = useState([])
	const[cast,setCast] = useState([])
	
		const Image_Url = `https://image.tmdb.org/t/p/original/`

		async function fetchData(){
				const request = await Axios.get(`movie/${id}?api_key=ab1da08307f82007e9975d4dccf67670&language=en-US`)
				setMovie(request.data);	
			}
		async function fetchTrailer(){
				const request = await Axios.get(`movie/${id}/videos?api_key=ab1da08307f82007e9975d4dccf67670&language=en-US`)
				setTrailer(request.data.results[0]);
			}
		async function fetchCast(){
				const request = await Axios.get(`movie/${id}/credits?api_key=ab1da08307f82007e9975d4dccf67670`)
				setCast(request.data.cast);
			}		
	
		useEffect(()=>{
			fetchData()
			fetchTrailer()
			fetchCast()
		},[id])

		

		console.log(trailer);
		
  return (
	<div className='movie-details'>
	 <div className='movie-left'>
	  <img src={`${Image_Url}${movie?.backdrop_path}`}/>
	 </div>
	 <div className='movie-right'>
	  <h1>{movie?.title}</h1>
	  <p>{movie?.overview}</p>
	  <p>Release Date: {movie?.release_date}</p>
	  <p>Rating: {movie?.vote_average}</p>
	  <button>Watch Trailer</button>
	 </div>
	 <div className='movie-trailer'>
	  {trailer && 
	   <YouTube videoId={trailer.key}  />
	  }
	 </div>
	 <div className='movie-cast'>
	  <h2>Cast</h2>
	  <div className='cast-list'>  
	   {cast.slice(0,8).map((member)=>(
	     <div className='cast-member' key={member.id}>
	      <img src={`${Image_Url}${member.profile_path}`} alt={member.name} />
      <p>{member.name}</p>
	     </div>
	   ))}
	  </div>
	 </div> 	
	</div>
  )
}

export default index