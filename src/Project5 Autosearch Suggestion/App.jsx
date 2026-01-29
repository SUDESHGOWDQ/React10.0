import React, { useEffect } from 'react'
import './App.css'

const App = () => {
	const[search,setSearch] = React.useState('')
	const[suggestions,setSuggestions] = React.useState([])

	async function handleSearch() {
	   let result = await fetch(`https://dummyjson.com/recipes/search?q=${search}`);
	   result = await result.json();
	   setSuggestions(result.recipes);
	}

	useEffect(()=>{
		if (search.length>3) {
			handleSearch();
		} else {
			setSuggestions([]);
		}
	},[search])

  return (
	<div className='search-container'>
	<input 
		type='text' 
		value={search} 
		onChange={(e)=>setSearch(e.target.value)} 
		placeholder='Search Data Here....'
		className='search-input'
	/>
	<div className='suggestions-list'>
		{
			suggestions.map((item)=>
				<div key={item.id} className='suggestion-item'>
					<div className='suggestion-name'>{item.name}</div>
				</div>
			)
		}
	</div>
	</div>
  )
}

export default App