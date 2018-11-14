import { connect } from 'react-redux';
import { setVenue, getDetails, getInstagram } from '../../actions';
import Venue from './venue.component';

const mapStateToProps = state => ({
  venue: state.rootReducer.venue,
  posts: state.rootReducer.instaPosts
});

const mapDispatchToProps = dispatch => ({
  setVenue: (placeId, city, country) =>
    dispatch(setVenue(placeId, city, country)),
  getDetails: () => dispatch(getDetails()),
  getInstagram: (lat, lng, placeName) =>
    dispatch(getInstagram(lat, lng, placeName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Venue);
