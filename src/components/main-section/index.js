import React, { Component } from 'react'
import Cover from 'react-video-cover'

import SearchFullScreen from '../search'

const style = {
	width: '100vw',
	height: '100vh',
	top: 0,
	left: 0,
	zIndex: -1,
	opacity: 0.5,
	overflow: 'hidden'
}

const videoOptions = {
	src: require('../../assets/greenhouse_flowers.mp4'),
	autoPlay: true,
	loop: true
}

class MainSection extends Component {
	constructor() {
		super()
		this.state = {
			value: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(evt) {
		this.setState({ value: evt.target.value })
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value)
		event.preventDefault()
	}

	render() {
		return (
			<div style={style}>
				<Cover videoOptions={videoOptions} remeasureOnWindowResize />
				<SearchFullScreen
					value={this.state.value}
					onChange={this.handleChange}
				/>
			</div>
		)
	}
}

export default MainSection
