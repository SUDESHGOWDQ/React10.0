import React, { useState } from 'react'
 
let BirthadyData = [
{id:1,name:'smitha',age:23},
{id:2,name:'anju',age:22},
{id:3,name:'arun',age:25},
{id:4,name:'sneha',age:21}
]

const App = () => {
	const[data,setData] = useState(BirthadyData)

	function handleClear(){
		setData([])
	}
  return (
	<div>
	<h1>Today's Bithaday {data.length}</h1>
	{
		data.map((item,index)=>{
			return(
				<div>
				{item.name}
				</div>
			)
		})
	}
	<button onClick={handleClear}>Clear</button>
	</div>
  )
}

export default App