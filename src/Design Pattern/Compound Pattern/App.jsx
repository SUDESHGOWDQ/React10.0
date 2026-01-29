import React, { useEffect, useState } from 'react'
import {Card,CardDescription,CardImage,CardTitle,CardRating} from './Design Pattern/Compound Pattern/Card'

const App = () => {
	const[data,setData] = useState([])
	useEffect(()=>{
		fetch('https://fakestoreapi.com/products')
		.then(res=>res.json())
		.then(data=>setData(data))
	},[])
	console.log(data);
	
  return (
	<div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
	{
		data.map((item,index)=>{
			return(
				<Card>
				  <CardTitle title={item.title}/>
				  <CardImage src={item.image}/>
				  <CardDescription description={item.description}/>
				  <CardRating rating={item.rating.rate}/>
				</Card>
			)
		})
	}
	</div>
  )
}

export default App