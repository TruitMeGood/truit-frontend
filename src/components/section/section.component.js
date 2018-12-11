import React, { Component } from 'react';
import Gallery from '../gallery';
import Loading from '../loading';

class Section extends Component {
  componentDidMount() {
    this.props.getPopular();
  }

  render() {
    const { items, isLoading } = this.props;
    return (
      <div>
        {isLoading && !items.length && (
          <Loading
            text="In a moment you'll discover the most popular places on Earth"
            additionalStyle={{
              paddingTop: 10,
              fontSize: '5vmin',
              fontWeight: 200
            }}
          />
        )}
        {items && <Gallery items={items} />}
      </div>
    );
  }
}

export default Section;
