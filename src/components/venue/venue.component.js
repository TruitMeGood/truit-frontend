import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Helmet } from 'react-helmet';

import Loading from '../loading';
import Gallery from '../gallery';
import InstaGallery from '../insta-gallery';
import TextDescription from '../text-description';
import NavBar from '../navbar';
import Map from '../map';
import ShareButtons from '../share-buttons';
import './style.css';

import { hashtagify } from '../../utils';

class Venue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      venueId: props.match.params.id.split('_')[0],
      venueName: props.location.state
        ? `${props.location.state.title}, ${props.location.state.location}`
        : '',
      isVisibilitySensorActive: true
    };
    this.dispatchNearbyPlaces = this.dispatchNearbyPlaces.bind(this);
  }

  async componentDidMount() {
    try {
      const { venueId, venueName } = this.state;

      await this.props.setVenue(venueId, venueName);
      await this.props.getDetails();
      await this.props.getFoursquareDetails();
      await this.props.getInstagram();
    } catch (err) {
      console.log(err);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && this.props.match.params.id !== nextProps.match.params.id) {
      window.onbeforeunload = function() {
        window.scrollTo(0, 0);
      };
      window.location.reload();
    }
  }

  mapNearbyPlaces(nearbyPlaces) {
    return nearbyPlaces.map(nearby => ({
      id: nearby.id,
      title: nearby.title,
      location: nearby.location,
      img: nearby.thumbnail_url
    }));
  }

  dispatchNearbyPlaces(isVisible) {
    if (isVisible) {
      const {
        displayNearbyPlacesOnMap,
        onChangeViewport,
        mapState
      } = this.props;
      this.setState({
        isVisibilitySensorActive: false
      });
      displayNearbyPlacesOnMap();
      onChangeViewport({
        ...mapState,
        zoom: 14
      });
    }
  }

  render() {
    const { venueName, isVisibilitySensorActive } = this.state;
    const { posts, venue, isLoading, isError } = this.props;

    const style = {
      backgroundImage: `url(https://source.unsplash.com/featured/?${encodeURI(
        venueName
      ).replace(/[!'()*]/g, escape)})`,
      backgroundSize: 'cover'
    };

    return (
      <div>
        <Helmet>
          <title>
            Truit -{' '}
            {venueName !== ''
              ? venueName
              : 'Discover beautiful places where you travel'}
          </title>
          <meta
            name="og:title"
            content={
              venueName !== ''
                ? venueName
                : 'Discover beautiful places where you travel'
            }
          />
          <meta
            name="twitter:title"
            content={
              venueName !== ''
                ? venueName
                : 'Discover beautiful places where you travel'
            }
          />
        </Helmet>
        <NavBar theme="white" elementToWatch=".photo" />
        <div className="venue">
          <div className="photo" style={style}>
            <div className="infos">
              <h1>{venue.title}</h1>
              <div className="subtitle">
                {venue.subtitle}
                <div className="share">
                  <ShareButtons
                    title={`I just found out about #${hashtagify(
                      venue.title
                    )} in #${hashtagify(venue.city)}, this is amazing !`}
                    body={`We should definitely go there some day !\n\n${
                      venue.subtitle
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="infos">
              <h1>{venue.title}</h1>
              <div>
                {venue.subtitle}
                <div className="share">
                  <ShareButtons
                    theme="black"
                    title={`I just found out about #${hashtagify(
                      venue.title
                    )} in #${hashtagify(venue.city)}, this is amazing !`}
                    body={`We should definitely go there some day !\n\n${
                      venue.subtitle
                    }`}
                  />
                </div>
              </div>
            </div>
            {isLoading && (
              <Loading
                text="You're almost there"
                additionalStyle={{
                  paddingTop: 10,
                  fontSize: '5vmin',
                  fontWeight: 200
                }}
              />
            )}
            {!isLoading && venue && venue.coordinates && <Map />}
            {venue && venue.text && (
              <div className="venue-description">
                <TextDescription text={venue.text} />
              </div>
            )}
            {venue && (
              <InstaGallery
                isLoading={isLoading}
                isError={isError}
                venue={venue}
                posts={posts}
              />
            )}
            {!isLoading && venue && venue.nearby_places && (
              <div className="nearby-places">
                <VisibilitySensor
                  onChange={this.dispatchNearbyPlaces}
                  active={isVisibilitySensorActive}
                  partialVisibility
                >
                  <div>
                    <h2>{`While you're there, why don't you check these ${
                      venue.nearby_places.length
                    } cool places next to ${venue.title} ?`}</h2>
                    <p>{`We added them on the map`}</p>
                    <Gallery
                      items={this.mapNearbyPlaces(venue.nearby_places)}
                    />
                  </div>
                </VisibilitySensor>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Venue;
