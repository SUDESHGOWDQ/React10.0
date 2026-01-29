import React from 'react'
import './Input.css'

export const Input = ({type,onChange,name,value,placeholder}) => {
  return (
	<input type={type} onChange={onChange}
	placeholder={placeholder}
	 name={name} value={value}/>
  )
}

