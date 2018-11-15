import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Gallery = ({ items }) => {
  if (!items) return;

  const gallery = items.map(obj => {
    return (
      <Link to={`/venues/${obj.id}-${obj.title},${obj.location}`} key={obj.id}>
        <div className="thumbnail">
          <img src={obj.img} alt={obj.title} className={'source'} />
          <div className="title">{obj.title}</div>
        </div>
      </Link>
    );
  });

  return (gallery && <div className="gallery">{gallery}</div>);
};

export default Gallery;
