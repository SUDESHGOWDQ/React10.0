import React,{useReducer} from 'react'

const App = () => {
	const initialState = 0
	function reducer(state,action){
		switch (action) {
			case "increment":
				return state + 1

			case "decrement":
				return state - 1	
			
				
			case "Power":
				return state * 2
		
			default:
				return state
		}
	}
	const [state, dispatch] = useReducer(reducer, initialState);
  return (
	<div>
	 <h1>Counter : {state}</h1>
	 <button onClick={()=>dispatch("increment")}>increment</button>
	 <button onClick={()=>dispatch("decrement")}>decrement</button>
	 <button onClick={()=>dispatch("Power")}>Multiplication</button>
	</div>
  )
}

export default App