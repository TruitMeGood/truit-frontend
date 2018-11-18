import _ from 'lodash';

export const hashtagify = text => {
  return text
    ? text
        .split(' ')
        .map(word => _.capitalize(word))
        .join('')
    : null;
};
