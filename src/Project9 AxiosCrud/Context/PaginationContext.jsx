import React, { createContext, useContext, useState } from 'react'
import { useCrud } from '../hooks/useCrud'

const PaginationContext = createContext()

export const PaginationProvider = ({ children }) => {
	const { data } = useCrud()
	const recordsPerPage = 10
	const totalRecords = Math.ceil(data.length / recordsPerPage)
	const [currentPage, setCurrentPage] = useState(1)

	function getDataForCurrentPage() {
		const startIndex = (currentPage - 1) * recordsPerPage
		const endIndex = startIndex + recordsPerPage
		return data.slice(startIndex, endIndex)
	}

	function goToNextPage() {
		if (currentPage < totalRecords) {
			setCurrentPage(currentPage + 1)
		}
	}

	function goToPreviousPage() {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	return (
		<PaginationContext.Provider
			value={{
				currentPage,
				totalRecords,
				getDataForCurrentPage,
				goToNextPage,
				goToPreviousPage
			}}
		>
			{children}
		</PaginationContext.Provider>
	)
}

export const usePaginationContext = () => {
	const context = useContext(PaginationContext)
	if (!context) {
		throw new Error('usePaginationContext must be used within PaginationProvider')
	}
	return context
}
