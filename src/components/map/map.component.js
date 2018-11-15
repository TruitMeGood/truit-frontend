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
		const { mapState, venue } = this.props
		const { lat, lng } = venue.coordinates
		this.props.onChangeViewport({...mapState,
			latitude: lat,
			longitude: lng,
			zoom: 11
		})
	}
	

	_renderMarker = (poi, index) => {
		const location = poi.coordinates
		return (
			<Marker
				key={`marker-${index}`}
				longitude={location ? location.lng: 0}
				latitude={location ? location.lat: 0}>
				<Pin size={20} />
			</Marker>
		)
	}

	_renderPopup() {
		const {popupInfo} = this.state;
		return popupInfo && (
		  <Popup tipSize={5}
			anchor="top"
			longitude={popupInfo.location.longitude}
			latitude={popupInfo.location.latitude}
			onClose={() => this.setState({popupInfo: null})} >
			<PoiInfo info={popupInfo} />
		  </Popup>
		);
	  }

	render() {
		const {
			loadMap,
			mapState,
			mapToken,
			onChangeViewport,
			venue
		} = this.props
		return (
			<div className="map-container" style={{width: '100vw', height: '100vh'}}>
			<MapGL
				{...mapState}
				mapStyle="mapbox://styles/mapbox/light-v9"
				showZoomControls={false}
				width={'100%'}
				height={'70%'}
				onLoad={loadMap}
				onError={(err) => console.log(err)}
				mapboxApiAccessToken={mapToken}
				onViewportChange={onChangeViewport}>
				{venue && this._renderMarker(venue)}
			</MapGL>
			</div>
		)
	}
}

export default Map
