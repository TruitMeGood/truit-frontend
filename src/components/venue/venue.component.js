import React, { Component } from 'react'
import Loading from '../loading'

import Gallery from '../gallery'
import NavBar from '../navbar'
import Map from '../map'
import './style.css'

class Venue extends Component {
	constructor(props) {
		super(props)
		this.state = {
			venueId: props.match.params.id.split('_')[0],
			venueName: decodeURI(props.match.params.id.split('_')[1])
		}
	}
	async componentDidMount() {
		try {
			const { venueId, venueName } = this.state

			await this.props.setVenue(venueId, venueName)
			await this.props.getDetails()
			await this.props.getInstagram()
		} catch (err) {
			console.log(err)
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log('route chnaged', nextProps)
	}

	mapNearbyPlaces(nearbyPlaces) {
		return nearbyPlaces.map(nearby => ({
			id: nearby.id,
			title: nearby.title,
			location: nearby.location,
			img: nearby.thumbnail_url
		}))
	}

	render() {
		const { venueName } = this.state
		const { posts, venue, isLoading } = this.props

		const style = {
			backgroundImage: `url(https://source.unsplash.com/featured/?${encodeURI(
				venueName
			).replace(/[!'()*]/g, escape)})`,
			backgroundSize: 'cover'
		}

		return (
			<div>
        <NavBar theme="white" elementToWatch=".photo" />
				<div className="venue">
					<div className="photo" style={style}>
						<div className="infos">
							<h1>{venue.title}</h1>
							<p>{venue.subtitle}</p>
						</div>
					</div>
					<div className="content">
						<div className="infos">
							<h1>{venue.title}</h1>
							<p>{venue.subtitle}</p>
						</div>
						{isLoading && (
							<Loading
								text="You're almost there"
								additionalStyle={{
									paddingTop: 10,
									fontSize: '5vmin',
									fontWeight: 200
								}}
							/>
						)}
						{!isLoading && venue && venue.coordinates && <Map />}
						{!isLoading && venueName && (
							<div className="instagram-posts">
								<h2>{`Check out these amazing photos taken at ${venueName}`}</h2>
								<Gallery items={posts} />
							</div>
						)}
						{!isLoading && venue && venue.nearby_places && (
							<div>
								<h2>{`While you there, why don't you check these ${
									venue.nearby_places.length
								} cool places next to ${venue.title}`}</h2>
								<Gallery items={this.mapNearbyPlaces(venue.nearby_places)} />
							</div>
						)}
					</div>
				</div>
			</div>
		)
	}
}

export default Venue
