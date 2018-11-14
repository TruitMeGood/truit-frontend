import React, { Component } from 'react';
import Gallery from '../gallery';
import NavBar from '../navbar';
import './style.css';
import { black } from 'ansi-colors';

class Place extends Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.id);
    this.state = {
      placeId: decodeURI(props.match.params.id),
      city: decodeURI(props.match.params.id).split('-')[0],
      country: decodeURI(props.match.params.id).split('-')[1]
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
    console.log(placeId);
    const style = {
      backgroundImage: `url(https://source.unsplash.com/featured/?${encodeURI(
        placeId
      )})`,
      backgroundSize: 'cover'
    };

    return (
      <div className="place">
        <NavBar theme="black" />
        <div className="photo" style={style} />
        <div className="content">
          <h1>{`Check out these amazing places in ${city}, ${country}`}</h1>
          <Gallery items={items} />
        </div>
      </div>
    );
  }
}

export default Place;
