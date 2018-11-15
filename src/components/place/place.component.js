import React, { Component } from 'react';
import Gallery from '../gallery';
import NavBar from '../navbar';
import './style.css';

class Place extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeId: decodeURI(props.match.params.id),
      city: decodeURI(props.match.params.id).split('_')[0],
      country: decodeURI(props.match.params.id).split('_')[1]
    };
  }
  componentDidMount() {
    const { city, country, placeId } = this.state;
    this.props.setPlace(placeId, city, country);
    this.props.getVenues();
  }

  render() {
    const { city, country, placeId } = this.state;
    const { items } = this.props;

    const style = {
      backgroundImage: `url(https://source.unsplash.com/featured/?${city},${country}`,
      backgroundSize: 'cover'
    };

    return (
      <div className="place">
        <NavBar theme="black" />
        <div className="photo" style={style} />
        <div className="content">
          <h1>{`Hey that's cool you wanna visit ${city}, ${country} !`}</h1>
          <h2>{`While you're at it, you might also wanna check out these ${items.length} amazing places`}</h2>
          <Gallery items={items} />
        </div>
      </div>
    );
  }
}

export default Place;
