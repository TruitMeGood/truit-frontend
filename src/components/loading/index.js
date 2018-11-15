import React from 'react'
import { Dot } from 'react-animated-dots'

import './style.css'

const Loading = ({ text, additionalStyle = {} }) => (
	<div className={"loading"} style={additionalStyle}>
		{text}
		<Dot>.</Dot>
		<Dot>.</Dot>
		<Dot>.</Dot>
	</div>
)

export default Loading
