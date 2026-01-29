import React, { Suspense } from 'react'


const App = () => {
	const Lazy = React.lazy(()=>import('./Suspense Component/Home.jsx'))
  return (
	<div>
	  <Suspense fallback={<h1>Loading...</h1>}>
	  	<Lazy/>
	  </Suspense>
	</div>
  )
}

export default App