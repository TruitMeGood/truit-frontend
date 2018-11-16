import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

class NavBar extends React.Component {
	constructor(props) {
		super(props)
		this.handleScroll = this.handleScroll.bind(this)
	}

	componentDidMount() {
		const { elementToWatch } = this.props
		if (elementToWatch) {
			window.addEventListener('scroll', () => this.handleScroll(elementToWatch))
		}
	}

	componentWillUnmount() {
		const { elementToWatch } = this.props
		if (elementToWatch) {
			window.removeEventListener('scroll', () =>
				this.handleScroll(elementToWatch)
			)
		}
	}

	handleScroll(elementToWatch) {
		let supportPageOffset = window.pageXOffset !== undefined
		let isCSS1Compat = (document.compatMode || '') === 'CSS1Compat'
		let scroll = {
			x: supportPageOffset
				? window.pageXOffset
				: isCSS1Compat
				? document.documentElement.scrollLeft
				: document.body.scrollLeft,
			y: supportPageOffset
				? window.pageYOffset
				: isCSS1Compat
				? document.documentElement.scrollTop
				: document.body.scrollTop
		}
		let element = document.querySelector(elementToWatch)
		let navbar = document.querySelector('.navbar')

		if (scroll.y >= element.clientHeight) {
			navbar.setAttribute('class', 'navbar black')
		} else {
			navbar.setAttribute('class', 'navbar white')
		}
	}

	render() {
		const { theme = 'white' } = this.props

		return (
			<div className={`navbar ${theme}`}>
				<div>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
				</div>
			</div>
		)
	}
}

export default NavBar
