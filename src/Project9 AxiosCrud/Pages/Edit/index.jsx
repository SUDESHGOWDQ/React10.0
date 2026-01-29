import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import axios from 'axios'
import { useCrud } from '../../hooks/useCrud'
import {Input} from '../../components/UI/Inputs'
import {Button} from '../../Components/UI/Buttons'
import './index.css'

const index = () => {
	const { error, handleEdit, handleBack } = useCrud()
   const {id} = useParams();
	const[value,setValue] = useState({
		name: '',
		email: ''
	})


	useEffect(()=>{
		axios.get(`http://localhost:3000/users/${id}`)
		.then(res=>setValue(res.data)
		)
	},[id])
	
	

  return (
	<div className='edit'>
	 {error && <div style={{color: 'red', padding: '10px', marginBottom: '10px'}}>{error}</div>}
	 <form onSubmit={(e)=>handleEdit(e, id, value)}>
	 <h1>Edit Data</h1>
	 <Input type='text' name='name' value={value.name} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} placeholder='Enter Name Here'/>
	 <br/>
	 <Input type='email' name='email' value={value.email} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} placeholder='Enter Email Here'/>
	 <br/>
	 <Button type='submit' value={'Edit'}/>
	 <Button type='submit' onClick={handleBack} value={'Back'}/>
	 </form>
	</div>
  )
}

export default index