import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
	const[data,setData] = useState([])
	const[search,setSearch] = useState('')
	const[currentPage,setCurrentPage] = useState(1)

	async function fetchData(){
		let result = await axios.get(`https://pixabay.com/api/?key=27465062-827a40ce7a6d1f80fc3a6743e&q=${search}&image_type=photo&per_page=5&page=${currentPage}`)
		setData(result.data);
	}

	useEffect(()=>{
		fetchData()
	})

	function handleNext(){
		setCurrentPage(currentPage+1)
	}

	function handlePrev(){
		setCurrentPage(currentPage-1)
	}

  return (
	<div>
	<input type='text' placeholder='Search Image Here' onChange={(e)=>setSearch(e.target.value)}/>
	{
		data?.hits?.map((item,index)=>{
			return(
				<img key={item.id} src={item.largeImageURL} height={item.webformatHeight} width={item.webformatWidth}/>
			)
		})
	}
	<button onClick={handlePrev}>Prev</button>
	{currentPage}
	<button onClick={handleNext}>Next</button>
	</div>
  )
}

export default App