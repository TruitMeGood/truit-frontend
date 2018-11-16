import { connect } from 'react-redux'
import {
	setVenue,
	getDetails,
	getInstagram,
	dispatchNearbyVenues
} from '../../actions'
import { onChangeViewport } from 'redux-map-gl'
import Venue from './venue.component'

const mapStateToProps = state => ({
	isLoading: state.rootReducer.isLoading,
	venue: state.rootReducer.venue,
	posts: state.rootReducer.instaPosts,
  shouldDisplayNearbyVenues: state.rootReducer.shouldDisplayNearbyVenues,
  mapState: state.map.viewport.toJS()
})

const mapDispatchToProps = dispatch => ({
	setVenue: (placeId, city, country) =>
		dispatch(setVenue(placeId, city, country)),
	getDetails: () => dispatch(getDetails()),
	getInstagram: (lat, lng, placeName) =>
		dispatch(getInstagram(lat, lng, placeName)),
	displayNearbyPlacesOnMap: () => dispatch(dispatchNearbyVenues()),
	onChangeViewport:(mapState) => dispatch(onChangeViewport(mapState))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Venue)
