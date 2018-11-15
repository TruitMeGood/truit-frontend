import { connect } from 'react-redux'
import { onChangeViewport } from 'redux-map-gl'
import { loadMap } from '../../actions/map.actions'

import Map from './map.component'

function mapStateToProps(state) {
  return {
    mapToken: state.rootReducer.mapToken,
    mapLoaded: state.map.isLoaded,
    mapState: state.map.viewport.toJS(),
    venue: state.rootReducer.venue,
  }
}

const mapDispatchToProps = {
  onChangeViewport,
  loadMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)