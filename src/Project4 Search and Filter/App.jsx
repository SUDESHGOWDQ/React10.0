import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
	const[data,setData] = useState([])
	const[search,setSearch] = useState('')
	const[filter,setFilter] = useState('All')
	const[debounce,setDebounce] = useState(search)

	useEffect(()=>{
		fetch('https://fakestoreapi.com/products')
		.then((res)=>res.json())
		.then((d)=>setData(d))
	},[])  

	useEffect(()=>{
		const handler = setTimeout(()=>{
			setDebounce(search)
		},2000)
		return ()=>{clearTimeout(handler)}
	},[search])


	
  return (
	<div className='App'>
	<input value={search} onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Search Product...'/>
	<select onChange={(e)=>setFilter(e.target.value)}>
		<option value={'All'}>All</option>
		<option value={'electronics'}>Electronics</option>
		<option value={'jewelery'}>Jewelery</option>
		<option value={"men's clothing"}>Men's Clothing</option>
		<option value	={"women's clothing"}>Women's Clothing</option>
	</select>
	<div className='card-section'>
	{
		data
		.filter((item,index)=>{
			if(filter === 'All') return true;
			return item.category === filter;
		})
		.filter((item)=>{
			return item.title.toLowerCase().includes(debounce.toLowerCase()) || 
				   item.category.toLowerCase().includes(debounce.toLowerCase());
		})
		.map((item,index)=>{
			return(
				<div className='Card' key={item.id}>
				<div><img src={item.image} height={'200px'} width={'200px'}/></div>
				<div>{item.title}</div>
				<div>{item.category}</div>
				</div>
			)
		})
	}
	</div>
	</div>
  )
}

export default App