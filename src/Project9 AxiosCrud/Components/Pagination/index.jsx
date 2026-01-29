import React from 'react'
import {Button} from '../UI/Buttons'
import { usePaginationContext } from '../../Context/PaginationContext'
import './index.css'

const index = () => {
	const {currentPage,totalRecords,goToNextPage,goToPreviousPage}=usePaginationContext();
  return (
	<div className='pagination'>
	<Button onClick={goToPreviousPage} type='submit' value={'Prev'}/>
	<span>{currentPage} / {totalRecords}</span>
	<Button onClick={goToNextPage} type='submit' value={'Next'}/>
	</div>
  )
}

export default index