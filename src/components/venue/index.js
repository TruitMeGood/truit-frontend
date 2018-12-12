import { connect } from 'react-redux';
import {
  setVenue,
  getDetails,
  getFoursquareDetails,
  getInstagram,
  dispatchNearbyVenues
} from '../../actions';
import { onChangeViewport } from 'redux-map-gl';
import Venue from './venue.component';

const mapStateToProps = (state, ownProps) => ({
  ...state.venue,
  shouldDisplayNearbyVenues: state.map.shouldDisplayNearbyVenues,
  mapState: state.map.viewport.toJS(),
  ...ownProps
});

const mapDispatchToProps = dispatch => ({
  setVenue: (placeId, city, country) =>
    dispatch(setVenue(placeId, city, country)),
  getDetails: () => dispatch(getDetails()),
  getFoursquareDetails: () => dispatch(getFoursquareDetails()),
  getInstagram: (lat, lng, placeName) =>
    dispatch(getInstagram(lat, lng, placeName)),
  displayNearbyPlacesOnMap: () => dispatch(dispatchNearbyVenues()),
  onChangeViewport: mapState => dispatch(onChangeViewport(mapState))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Venue);
