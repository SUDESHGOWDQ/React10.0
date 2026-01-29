import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const API_URL = 'http://localhost:3000/users'

export const useCrud = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const navigate = useNavigate()
	
	async function fetchAllData() {
		setLoading(true)
		setError(null)
		try {
			const result = await axios.get(API_URL)
			setData(result.data)
		} catch (error) {
			setError(error.message || 'Failed to fetch data')
			console.error('Fetch error:', error)
		} finally {
			setLoading(false)
		}
	}

	async function handleDelete(id) {
		setError(null)
		try {
			await axios.delete(`${API_URL}/${id}`)
			// Refetch data after successful delete
			await fetchAllData()
		} catch (error) {
			setError(error.message || 'Failed to delete')
			console.error('Delete error:', error)
		}
	}

	async function handleCreate(e, value) {
		e.preventDefault()
		setError(null)
		try {
			await axios.post(API_URL, value)
			navigate('/')
			// Optionally refetch data
			await fetchAllData()
		} catch (error) {
			setError(error.message || 'Failed to create')
			console.error('Create error:', error)
		}
	}

	async function handleEdit(e, id, value) {
		e.preventDefault()
		setError(null)
		try {
			await axios.put(`${API_URL}/${id}`, value)
			navigate('/')
			// Optionally refetch data
			await fetchAllData()
		} catch (error) {
			setError(error.message || 'Failed to update')
			console.error('Update error:', error)
		}
	}

	function handleBack() {
		navigate('/')
	}

	useEffect(() => {
		fetchAllData()
	}, []) // Empty dependency array - only fetch on mount

	return { 
		data, 
		loading, 
		error, 
		handleDelete, 
		handleCreate, 
		handleEdit, 
		handleBack,
		refetch: fetchAllData 
	}
}

