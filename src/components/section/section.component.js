import React, { Component } from 'react';
import Gallery from '../gallery';
import Loading from '../loading';

class Section extends Component {
  componentDidMount() {
    this.props.getPopular();
  }

  render() {
    const { popularItems, isPopularLoading } = this.props;
    return (
      <div>
        {isPopularLoading && !popularItems.length && (
          <Loading
            text="In a moment you'll discover the most popular places on Earth"
            additionalStyle={{
              paddingTop: 10,
              fontSize: '5vmin',
              fontWeight: 200
            }}
          />
        )}
        {popularItems && <Gallery items={popularItems} />}
      </div>
    );
  }
}

export default Section;
