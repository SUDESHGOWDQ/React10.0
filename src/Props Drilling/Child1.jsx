import React from 'react'
import Child2 from './Child2.jsx'

const Child1 = ({name}) => {
  return (
	<div>
		<Child2 name={name} />
	</div>
  )
}

export default Child1