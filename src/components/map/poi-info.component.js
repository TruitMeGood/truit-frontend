import React from 'react';
import { Link } from 'react-router-dom';

import './poi-info.css';

const PoiInfo = ({ info }) => {
  const isExtra = !!info.distance;
  return (
    <div className="poiInfo-container">
      <div className="poiInfo-header">
        <div className="poiInfo-title">{info.title}</div>
      </div>
      {isExtra && (
        <div className="poiInfo-cta">
          <Link
            to={{
              pathname: `/venues/${info.id}`,
              state: { title: info.title, location: info.location }
            }}
          >
            <button>View more</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PoiInfo;
