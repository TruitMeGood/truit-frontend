import React, { Component } from 'react';

const Place = query => {
  const placeId = query.match.params.id;
  console.log(placeId);
  return <div>Match</div>;
};

export default Place;
