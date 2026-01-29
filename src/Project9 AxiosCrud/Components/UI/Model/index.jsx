import React from 'react'
import './index.css'

const index = ({Children, onClose}) => {

  return (
	<div className='Model'>
		<div className="Model-content">
			<button className='Model-close' onClick={onClose}>X</button>
			{Children}
		</div>
	</div>
  )
}

export default index