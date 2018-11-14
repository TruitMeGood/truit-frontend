import React from 'react';

const Place = query => {
  const placeId = query.match.params.id;
  console.log(placeId);
  return <div>{placeId}</div>;
};

export default Place;
