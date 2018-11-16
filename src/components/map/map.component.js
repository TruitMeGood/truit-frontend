import React from 'react'
import MapGL, { Marker, Popup } from 'react-map-gl'

import './map.css'

import Pin from './pin.component'
import PoiInfo from './poi-info.component'

class Map extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			popupInfo: null
		}
	}

	componentDidMount() {
		const { mapState, venue, onChangeViewport } = this.props
		const { lat, lng } = venue.coordinates
		onChangeViewport({
			...mapState,
			latitude: lat,
			longitude: lng,
			zoom: 11
		})
	}

	renderMarker = (poi, isExtra = false) => {
		const location = poi.coordinates
		return (
			<Marker
				key={`marker-${poi.id}`}
				longitude={location ? location.lng : 0}
				latitude={location ? location.lat : 0}>
				<Pin size={20} isExtra={isExtra} />
			</Marker>
		)
	}

	renderPopup() {
		const { popupInfo } = this.state
		return (
			popupInfo && (
				<Popup
					tipSize={5}
					anchor="top"
					longitude={popupInfo.location.longitude}
					latitude={popupInfo.location.latitude}
					onClose={() => this.setState({ popupInfo: null })}>
					<PoiInfo info={popupInfo} />
				</Popup>
			)
		)
	}

	render() {
		const {
			loadMap,
			mapState,
			mapToken,
			onChangeViewport,
			shouldDisplayNearbyVenues,
			venue
		} = this.props
		return (
			<div className="map-container">
				<MapGL
					{...mapState}
					mapStyle="mapbox://styles/mapbox/light-v9"
					showZoomControls={false}
					width={'100%'}
					height={'100%'}
					onLoad={loadMap}
					onError={err => console.log(err)}
					mapboxApiAccessToken={mapToken}
					onViewportChange={onChangeViewport}>
					{venue && this.renderMarker(venue)}
					{shouldDisplayNearbyVenues &&
						venue.nearby_places.map(venue => this.renderMarker(venue, true)) }
				</MapGL>
			</div>
		)
	}
}

export default Map
