import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Gallery = ({ items, shouldWrapWithLink = true }) => {
  if (!items) return;

  const galleryItem = (title, img, id) => (
    <div className="thumbnail" key={id}>
      <img src={img} alt={title} className={'source'} />
      <div className="title">{title}</div>
    </div>
  );

  const gallery = items.map((obj, index) => {
    const { id, title, img, location } = obj;
    return shouldWrapWithLink ? (
      <Link
        to={{
          pathname: `/venues/${id}`,
          state: { title: title, location: location }
        }}
        replace={true}
        key={index}
      >
        {galleryItem(title, img, index)}
      </Link>
    ) : (
      galleryItem(title, img, index)
    );
  });

  return items && <div className="gallery">{gallery}</div>;
};

export default Gallery;
