import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Gallery from '../gallery';
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
      await this.props.getVenues();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { city, country } = this.state;
    const { items } = this.props;

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
          <p>{`While you're at it, you might also wanna check out these ${
            items.length
          } amazing places`}</p>
          <ShareButtons
            theme="black"
            title={`There are so many things to do in #${hashtagify(
              city
            )}, this is amazing !`}
            body={`We should definitely go there some day !`}
          />
          <Gallery items={items} />
        </div>
      </div>
    );
  }
}

export default Place;
