import React  from 'react'
import { Link } from 'react-router-dom'
import {Button} from '../../Components/UI/Buttons'
import Pagination from '../../Components/Pagination'
import {useModel} from '../../hooks/useModel'
import { usePaginationContext } from '../../Context/PaginationContext'
import { useCrud } from '../../hooks/useCrud'
import Loader from '../../Components/UI/Loader'
import './index.css'

const index = () => {
	const {data,loading, error, handleDelete } = useCrud()
	const { openModel } = useModel()
	const {getDataForCurrentPage} = usePaginationContext()
	
	if (loading) return <div className="loading-message"><Loader/></div>
	if (error) return <div className="error-message">Error: {error}</div>
	
  return (
	<div className="home-container">
	<div className="table-wrapper">
	<table className="user-table">
	<thead>
	<tr>
		<th>ID</th>
		<th>Name</th>
		<th>Email</th>
		<th>Image</th>
		<th>Gender</th>
		<th>Actions</th>
	</tr>
	</thead>
	<tbody>
	{
		getDataForCurrentPage().map((item,index)=>{
			return(
				<tr key={item.id}>
				<td data-label="ID">{item.id}</td>
				<td data-label="Name">{item.name}</td>
				<td data-label="Email">{item.email}</td>
				<td data-label="Image"><img src={item.image} height={'50px'} width={'50px'} className="user-image" alt={item.name}/></td>
				<td data-label="gender">{item.gender}</td>
				<td data-label="Actions">
				<div className="action-buttons">
				<Button type={'button'} onClick={openModel} value={'view'}/>
				<Link to={`/edit/${item.id}`}><Button value={'Edit'}/></Link>
				<Button value={'Delete'} onClick={()=>handleDelete(item.id)}/>
				</div>
				</td>
				</tr>
			)
		})
	}
	</tbody>
	<tfoot>
	<tr>
		<td colSpan="5">Total Users: {data.length}</td>
	</tr>
	</tfoot>
	</table>
	</div>
	<div className='Pagination-container'>
	<Pagination />
	</div>
	</div>
  )
}

export default index