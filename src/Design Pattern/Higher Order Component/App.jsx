import React from 'react'
import WithCounter from './Design Pattern/Higher Order Component/WithCounter'

const App = ({count,handleIncrement}) => {
  return (
	<div>
	<h1>Count:{count}</h1>
	<button onClick={handleIncrement}>Increment</button>
	</div>
  )
}

export default WithCounter(App)