import { connect } from 'react-redux';
import { setPlace, getVenues } from '../../actions';
import Place from './place.component';

const mapStateToProps = state => ({
  items: state.rootReducer.placeItems
});

const mapDispatchToProps = dispatch => ({
  setPlace: (placeId, city, country) => dispatch(setPlace(placeId, city, country)),
  getVenues: () => dispatch(getVenues())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Place);
