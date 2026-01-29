import React from 'react'
import useModel from './Design Pattern/CutsomHook/useModel'

const Child = () => {

	const{open,handleOpen,handleClose} = useModel()

  return (
	<div>
	<h1>Child Component</h1>
	<button onClick={handleOpen}>Open</button>
	{
		open && <div>
		Hii This message from Child Component
		<button onClick={handleClose}>Close</button>
		</div>
	}
	</div>
  )
}

export default Child