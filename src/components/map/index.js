import { connect } from 'react-redux';
import { onChangeViewport } from 'redux-map-gl';
import { loadMap } from '../../actions/map.actions';

import Map from './map.component';

function mapStateToProps(state) {
  return {
    mapToken: state.map.mapToken,
    mapLoaded: state.map.isLoaded,
    mapState: state.map.viewport.toJS(),
    venue: state.venue.venue,
    shouldDisplayNearbyVenues: state.map.shouldDisplayNearbyVenues
  };
}

const mapDispatchToProps = {
  onChangeViewport,
  loadMap
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
