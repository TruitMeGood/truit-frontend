import React from 'react'
import './style.css'

const SearchFullScreen = ({ value, onChange }) => (
	<div className="full-screen-search">
		<label>Search for your next destination</label>
		<div>
			<input type="text" name="searchlarge" value={value} onChange={onChange} />
		</div>
	</div>
)

export default SearchFullScreen
