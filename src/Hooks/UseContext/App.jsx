import React, { createContext } from 'react'
import Child1 from './Hooks/UseContext/Child1'


const Data = createContext()
const App = () => {

	const name = "Vikas Shetty"
	const age = 24

	function DarkMode(){
		document.body.style.backgroundColor = "black"
		document.body.style.color = "white"
	}

  return (
	<div>
	  <Data.Provider value={{name,age,DarkMode}}>
	  <Child1 />
	  </Data.Provider>
	</div>
  )
}

export {Data}
export default App


