import { connect } from 'react-redux';
import { getPopularItems } from '../../actions';
import Gallery from './gallery.component';

const mapStateToProps = state => ({
  items: state.rootReducer.popularItems
});

const mapDispatchToProps = dispatch => ({
  getPopular: () => dispatch(getPopularItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
