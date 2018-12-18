import { connect } from 'react-redux';
import {
  setPlace,
  getVenues,
  clearVenues,
  getSpotifyPlaylist
} from '../../actions';
import Place from './place.component';

const mapStateToProps = state => ({
  placeVenuesItems: state.place.placeVenuesItems,
  isPlaceLoading: state.place.isPlaceLoading,
  isSpotifyLoading: state.place.isSpotifyLoading,
  isPlaylistFound: !!state.place.spotify.uri,
  spotify: state.place.spotify
});

const mapDispatchToProps = dispatch => ({
  setPlace: (placeId, city, country) =>
    dispatch(setPlace(placeId, city, country)),
  getVenues: () => dispatch(getVenues()),
  clearVenues: () => dispatch(clearVenues()),
  getPlaylist: () => dispatch(getSpotifyPlaylist())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Place);
