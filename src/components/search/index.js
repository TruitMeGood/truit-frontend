import { connect } from 'react-redux';
import { searchPlaces, clearPlaces } from '../../actions';
import { push } from 'connected-react-router';
import SearchFullScreen from './search.component';

const mapStateToProps = state => ({
  searchResults: state.main.searchResults,
  isSearchLoading: state.main.isSearchLoading
});

const mapDispatchToProps = dispatch => ({
  searchPlaces: keyword => dispatch(searchPlaces(keyword)),
  clearPlaces: () => dispatch(clearPlaces()),
  gotoPlace: (city, country) => dispatch(push(`/places/${city}_${country}`))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFullScreen);
