import { connect } from 'react-redux';
import { getPopularItems } from '../../actions';
import Section from './section.component';

const mapStateToProps = state => ({
  popularItems: state.main.popularItems,
  isLoading: state.main.isPopularLoading
});

const mapDispatchToProps = dispatch => ({
  getPopular: () => dispatch(getPopularItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Section);
