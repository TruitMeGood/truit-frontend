import React from 'react';
import Gallery from '../gallery';

const InstaGallery = ({ isLoading, isError, venue, posts }) => {
  const selectPostProvider = venue && venue.pictures ? venue.pictures : [];

  const shouldDisplayInstagram =
    !isLoading && !isError && selectPostProvider.length > 0;
  const shouldDisplayEmptyPost =
    !isLoading && !isError && !selectPostProvider.length > 0;

  const renderInstaGallery = () => (
    <div className="instagram-posts">
      <h2>{`Check out these amazing photos taken at ${venue.title}`}</h2>
      <Gallery
        shouldWrapWithLink={false}
        items={venue.shouldLookForInstagram ? posts : venue.pictures}
      />
    </div>
  );

  const renderEmptyPost = () => (
    <div className="instagram-empty">
      <h2>{`Bummer, we couldn't find any Instagram posts for this place...`}</h2>
      <p>{`This is your chance to shine !`}</p>
    </div>
  );

  return shouldDisplayInstagram
    ? renderInstaGallery()
    : shouldDisplayEmptyPost
    ? renderEmptyPost()
    : null;
};

export default InstaGallery;
