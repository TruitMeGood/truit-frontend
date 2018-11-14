import React, { Component } from 'react'
import Gallery from '../gallery/gallery.component'
import './style.css'

class Place extends Component {
  constructor(props) {
    super(props)
    console.log(props.match.params.id)
    this.state = {
      placeId: props.match.params.id,
      city: props.match.params.id.split('-')[0],
      country: props.match.params.id.split('-')[1]
    }
  }
  componentDidMount() {
    const { city, country, placeId } = this.state
    this.props.setPlace(placeId, city, country)
    this.props.getVenues()
  }

	render() {
    const { city, country, placeId } = this.state
    const { items } = this.props

		const style = {
			background: `url(https://source.unsplash.com/featured/?${placeId})`,
			height: '100vh',
			width: '50vw',
      backgroundSize: 'cover',
      opacity: 0.7
		}

		return (
			<div className="place">
				<div style={style} />
				<div className="content">
					<h1>
            {`Check out these amazing places in ${city}, ${country}`}
					</h1>
          <Gallery items={items} />
				</div>
			</div>
		)
	}
}

export default Place
