import React from 'react';
import './poi-info.css';

const PoiInfo = ({ info }) => {
  const isExtra = !!info.distance;
  return (
    <div className="poiInfo-container">
      <div className="poiInfo-header">
        <div className="poiInfo-title">{info.name}</div>
      </div>
      {isExtra && (
        <div className="poiInfo-cta">
          <p>Distance : {info.distance}</p>
        </div>
      )}
    </div>
  );
};

export default PoiInfo;
