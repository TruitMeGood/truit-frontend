import React, { Component } from 'react'
import AtlasObscura from 'node-atlas-obscura'
import StickyFooter from 'react-sticky-footer'
import ReactPlaceholder from 'react-placeholder';
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
		this.atlas = new AtlasObscura()
	}

	async componentDidMount() {
		try {
			const places = await this.atlas.getPopular()
			this.setState({
				images: places,
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
