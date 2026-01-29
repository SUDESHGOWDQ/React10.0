 import React from 'react'

const Child = ({learning}) => {
	console.log("Can u see me i am in child component");
	
  return (
	<div>Child</div>
  )
}

export default React.memo(Child)