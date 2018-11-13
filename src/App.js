import React, { Component } from 'react'
import StickyFooter from 'react-sticky-footer'
import ReactPlaceholder from 'react-placeholder';
import axios from 'axios';

import MainSection from './components/main-section'
import Gallery from './components/gallery'


import './App.css'
import "react-placeholder/lib/reactPlaceholder.css";

class App extends Component {
	constructor() {
		super()
		this.state = {
			images: [],
			galleryLoaded: false
		}
		this.request = axios.create({ 
			baseURL: 'https://peaceful-ocean-64701.herokuapp.com'
		})
	}

	async componentDidMount() {
		try {
			const places = await this.request({
				method:'GET',
				url: '/popular'
			})
			this.setState({
				images: places.data,
				galleryLoaded: true
			})
		} catch (err) {
			console.log(err)
		}
	}

	render() {
		const { images, galleryLoaded } = this.state
		return (
			<div className="App">
				<div className="section">
					<MainSection />
				</div>
				<div>
					<ReactPlaceholder showLoadingAnimation rows={5} ready={galleryLoaded} type="rect">
						<Gallery images={images} />
					</ReactPlaceholder>
				</div>
				<StickyFooter
					normalStyles={{
						backgroundColor: '#fff',
						padding: '2rem',
						fontWeight: '200',
						letterSpacing: '1px'
					}}
					stickyStyles={{
						visibility: 'hidden'
					}}>
					Made with ❤ by Jérémie Zarca
				</StickyFooter>
			</div>
		)
	}
}

export default App
