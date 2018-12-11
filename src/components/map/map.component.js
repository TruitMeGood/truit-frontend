import React from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';

import Pin from './pin.component';
import PoiInfo from './poi-info.component';

import './map.css';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupInfo: null
    };
    this.map = React.createRef();
  }

  componentDidMount() {
    const { mapState, venue, onChangeViewport } = this.props;
    const { lat, lng } = venue.coordinates;
    onChangeViewport({
      ...mapState,
      latitude: lat,
      longitude: lng,
      zoom: 11
    });
    if (this.map.tap) {
      this.map.tap.disable();
      this.map.dragging.disable();
    }
  }

  renderMarker = (poi, isExtra = false) => {
    const location = poi.coordinates;
    return (
      <Marker
        key={`marker-${poi.id}`}
        longitude={location ? location.lng : 0}
        latitude={location ? location.lat : 0}
      >
        <Pin
          size={20}
          isExtra={isExtra}
          onClick={() => this.setState({ popupInfo: poi })}
        />
      </Marker>
    );
  };

  renderPopup() {
    const { popupInfo } = this.state;
    console.log(popupInfo);
    const location = popupInfo.coordinates;
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          className="popup"
          longitude={location ? location.lng : 0}
          latitude={location ? location.lat : 0}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <PoiInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const {
      loadMap,
      mapState,
      mapToken,
      onChangeViewport,
      shouldDisplayNearbyVenues,
      venue
    } = this.props;
    const { popupInfo } = this.state;
    return (
      <div className="map-container">
        <MapGL
          {...mapState}
          ref={this.map}
          mapStyle="mapbox://styles/mapbox/light-v9"
          showZoomControls={false}
          width={'100%'}
          height={'100%'}
          onLoad={loadMap}
          onError={err => console.log(err)}
          mapboxApiAccessToken={mapToken}
          onViewportChange={onChangeViewport}
        >
          {venue && this.renderMarker(venue)}
          {shouldDisplayNearbyVenues &&
            venue.nearby_places.map(venue => this.renderMarker(venue, true))}
          {popupInfo && this.renderPopup()}
        </MapGL>
      </div>
    );
  }
}

export default Map;
