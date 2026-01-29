import React from 'react'

export const useModel = () => {
	const[isOpen,setIsOpen] = React.useState(false)

	const openModel = () => {
		setIsOpen(true)
	}

	const closeModel = () => {
		setIsOpen(false)
	}

	const onToggleModel = () => {
		setIsOpen((prev) => !prev)
	}

  return { isOpen, openModel, closeModel, onToggleModel }
}

