import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import SpotifyPlayer from 'react-spotify-player';

import Gallery from '../gallery';
import Loading from '../loading';
import NavBar from '../navbar';
import ShareButtons from '../share-buttons';

import { hashtagify } from '../../utils';

import './style.css';

class Place extends Component {
  constructor(props) {
    super(props);
    const placeId = decodeURI(props.match.params.id);
    this.state = {
      placeId: placeId,
      city: placeId.split('_')[0],
      country: placeId.split('_')[1]
    };
  }

  async componentDidMount() {
    try {
      const { city, country, placeId } = this.state;
      this.props.setPlace(placeId, city, country);
      this.props.clearVenues();
      await this.props.getPlaylist();
      await this.props.getVenues();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { city, country } = this.state;
    const {
      placeVenuesItems,
      isPlaceLoading,
      isSpotifyLoading,
      isPlaylistFound,
      spotify
    } = this.props;

    const style = {
      backgroundImage: `url(https://source.unsplash.com/featured/?${city},${country}`,
      backgroundSize: 'cover'
    };

    return (
      <div className="place">
        <Helmet>
          <title>
            Truit - Places in {city}, {country}
          </title>
          <meta
            name="og:title"
            content={`Discover cool places in {city}, {country}`}
          />
          <meta
            name="twitter:title"
            content={`Discover cool places in {city}, {country}`}
          />
        </Helmet>
        <NavBar theme="black" />
        <div className="photo" style={style} />
        <div className="content">
          <h1>{`Hey that's cool you wanna visit ${city}, ${country} !`}</h1>
          {isPlaceLoading && (
            <Loading
              text="Hold on, we're looking for the best things to see"
              additionalStyle={{
                paddingTop: 10,
                fontSize: '5vmin',
                fontWeight: 200
              }}
            />
          )}
          {!isSpotifyLoading && isPlaylistFound && (
            <div className="spotify-block">
              <p>{`Here's some music to set the mood`}</p>
              <div className="spotify-player">
                <SpotifyPlayer
                  uri={spotify.uri}
                  size="compact"
                  view="coverart"
                  theme="white"
                />
              </div>
            </div>
          )}
          {!isPlaceLoading && (
            <div>
              <p>{`We found ${
                placeVenuesItems.length
              } amazing places you may want to see`}</p>
              <ShareButtons
                theme="black"
                title={`There are so many things to do in #${hashtagify(
                  city
                )}, this is amazing !`}
                body={`We should definitely go there some day !`}
              />
              <Gallery items={placeVenuesItems} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Place;
