import React from 'react'
import './index.css'

export const Button = ({type,onClick,value}) => {
  return (
	<button type={type} onClick={onClick}>{value}</button>
  )
}

