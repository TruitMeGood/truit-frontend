import React, { Component } from 'react';
import Gallery from '../gallery';
import NavBar from '../navbar';
import './style.css';
import { black } from 'ansi-colors';

class Venue extends Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.id);
    this.state = {
      venueId: props.match.params.id.split('-')[0],
      venueName: decodeURI(props.match.params.id.split('-')[1])
    };
  }
  async componentDidMount() {
    try {
      const { venueId, venueName } = this.state;

      await this.props.setVenue(venueId, venueName);
      await this.props.getDetails();
      await this.props.getInstagram();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { venueId, venueName } = this.state;
    const { posts, venue } = this.props;
    console.log(encodeURI(venueName));
    const style = {
      backgroundImage: `url(https://source.unsplash.com/featured/?${encodeURI(
        venueName
      ).replace(/[!'()*]/g, escape)})`,
      backgroundSize: 'cover'
    };

    return (
      <div className="venue">
        <NavBar theme="black" back />
        <div className="photo" style={style} />
        <div className="content">
          <h1>{venue.title}</h1>
          <p>{venue.subtitle}</p>
          {posts.length && (
            <div className="instagram-posts">
              <h2>{`Check out these amazing photos taken at ${venueName}`}</h2>
              <Gallery items={posts} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Venue;
