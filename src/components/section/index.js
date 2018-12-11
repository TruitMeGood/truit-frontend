import { connect } from 'react-redux';
import { getPopularItems } from '../../actions';
import Section from './section.component';

const mapStateToProps = state => ({
  items: state.rootReducer.popularItems,
  isLoading: state.rootReducer.isLoading
});

const mapDispatchToProps = dispatch => ({
  getPopular: () => dispatch(getPopularItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Section);
