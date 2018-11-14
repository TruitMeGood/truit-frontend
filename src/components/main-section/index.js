import React from 'react'

import SearchFullScreen from '../search'

const style = {
	width: '100vw',
	height: '100vh',
	background: `url(https://source.unsplash.com/collection/135653)`,
	backgroundSize: 'cover',
	top: 0,
	left: 0,
	zIndex: -1,
	opacity: 0.8,
	overflow: 'hidden'
}

const MainSection = () => (
	<div style={style}>
		<SearchFullScreen />
	</div>
)

export default MainSection
