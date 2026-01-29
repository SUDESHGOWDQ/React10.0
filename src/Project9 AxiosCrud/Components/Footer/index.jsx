import React from 'react'
import './index.css'

const index = () => {
  return (
	<footer className='Footer'>
		<div className='footer-content'>
			<p>&copy; {new Date().getFullYear()} CRUD App. All rights reserved.</p>
			<div className='footer-links'>
				<a href='#'>About</a>
				<a href='#'>Contact</a>
				<a href='#'>Privacy Policy</a>
			</div>
		</div>
	</footer>
  )
}

export default index