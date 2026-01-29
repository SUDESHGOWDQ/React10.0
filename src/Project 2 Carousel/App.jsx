import React,{useState} from 'react'

const ImageData = [
	'https://cdn.pixabay.com/photo/2024/11/10/10/32/christmas-9187543_1280.jpg',
	'https://cdn.pixabay.com/photo/2024/01/04/15/10/mountain-8487679_1280.jpg',
	'https://cdn.pixabay.com/photo/2025/12/18/03/44/ganges-10021683_1280.jpg'
]

const App = () => {

	const[activeIndex,setActiveIndex] = useState(0);

	function handleNext(){
		setActiveIndex((prevIndex)=>(prevIndex+1)%ImageData.length)
	}


	
	function handlePrev(){
		setActiveIndex((prevIndex)=>(prevIndex-1+ImageData.length)%ImageData.length)
	}

  return (
	<div>
	<img src={ImageData[activeIndex]} height={'400px'} width={'100%'}/>
	<button onClick={handlePrev}>Prev</button>
	{activeIndex}
	<button onClick={handleNext}>Next</button>
	</div>
  )
}

export default App