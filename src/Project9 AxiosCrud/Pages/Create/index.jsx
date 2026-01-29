import React, { useState } from 'react'
import { useCrud } from '../../hooks/useCrud'
import {Input} from '../../components/UI/Inputs'
import {Button} from '../../Components/UI/Buttons'
import {Radio} from '../../Components/UI/Radio'
import './index.css'


const index = () => {
	const { error, handleCreate, handleBack } = useCrud()

	const[value,setValue] = useState({
		name: '',
		email: '',
		image:'',
		gender:''
	})

  return (
	<div className='create'>
	 {error && <div style={{color: 'red', padding: '10px', marginBottom: '10px'}}>{error}</div>}
	 <form onSubmit={(e)=>handleCreate(e, value)}>
	 <h1>Creating Data</h1>
	 <Input type='text' name='name' value={value.name} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} placeholder='Enter Name Here'/>
	 <br/>
	 <Input type='email' name='email' value={value.email} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} placeholder='Enter Email Here'/>
	 <br/>
	 <Input type='text' name='image' value={value.image} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} placeholder='Enter Image URL Here'/>
	 <br/>
	 <Radio type='radio' name='gender' value='male' checked={value.gender==='male'} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} label='Male'/>
	 <Radio type='radio' name='gender' value='female' checked={value.gender==='female'} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} label='Female'/>
	 <br/>
	 <Button type='submit' value={'Create'}/>
	 <Button type='submit' onClick={handleBack} value={'Back'}/>
	 </form>
	</div>
  )
}

export default index