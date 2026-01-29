import React,{useState} from 'react'

const WithCounter = (OriginalComponent) => {
  return  function EnhanceComponent(){
	const[count,setCount] = useState(0)
	function handleIncrement(){
		setCount(count+1)
	}
	return (
		<OriginalComponent count={count} handleIncrement={handleIncrement} />
	)
  }
}

export default WithCounter