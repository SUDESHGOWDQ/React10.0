import React from 'react'
import WithCounter from './Design Pattern/Higher Order Component/WithCounter'

const Child = ({count,handleIncrement}) => {
  return (
	<div>
	<h1>Child Count:{count}</h1>
	<button onMouseOver={handleIncrement}>Increment</button>
	</div>
  )
}

export default WithCounter(Child)