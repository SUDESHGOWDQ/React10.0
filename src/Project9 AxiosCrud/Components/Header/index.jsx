import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'


const index = () => {

const navigate = useNavigate();
	function handleCreatePage(){
		navigate('/create')
	}

  return (
	<div className='Navbar'>
	<div className='nav-left'>
	CRUD APP
	</div>
	<div className='nav-right'>
	<button onClick={handleCreatePage}>Create User</button>
	</div>
	</div>
  )
}

export default index