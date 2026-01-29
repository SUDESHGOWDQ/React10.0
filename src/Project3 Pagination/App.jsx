 import React,{useState} from 'react'
 import Data from './Project3 Pagination/data.json'
 
 const App = () => {
	const recordsPerPage = 10;
	const totalPage = Math.ceil(Data.users.length/recordsPerPage)
	const[currentPage,setCurrentPage] = useState(1);
  
	function handleData(){
		const firstIndex = (currentPage-1)*recordsPerPage;
		const lastIndex = firstIndex + recordsPerPage;
		const records = Data.users.slice(firstIndex,lastIndex);
		return records;
	}

	function handleNext(){
		setCurrentPage((prev)=>prev+1)
	}

	function handlePrev(){
		setCurrentPage((prev)=>prev-1)
	}


   return (
	 <div>
	 <table border={'1'} cellPadding={'10'} cellSpacing={'0'} >
				<thead>
				<tr>
				<th>Name</th>
				<th>Email</th>
				<th>Adress</th>
				</tr>
				</thead>
	 {
		handleData().map((item,index)=>{
			return(
				<tbody>
				<tr>
				<td>{item.name}</td>
				<td>{item.email}</td>
				<td>{item.address}</td>
				</tr>
				</tbody>
			)
		})
	 }
	 </table>
	 <button disabled={currentPage=== 1} onClick={handlePrev}>Prev</button>
	 <span> {currentPage} / {totalPage} </span>
	 <button disabled={currentPage===totalPage} onClick={handleNext}>Next</button>
	 </div>
   )
 }
 
 export default App