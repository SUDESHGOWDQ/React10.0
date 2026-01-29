import React,{useState} from 'react'

const useModel = () => {
	const[open,setOpen] = useState(false)
		
			function handleOpen(){
				setOpen(true)
			}
		
			function handleClose(){
				setOpen(false)
			}
  return {
	open,handleOpen,handleClose
  }
}

export default useModel