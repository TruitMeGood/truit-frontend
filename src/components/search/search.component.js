import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import Loading from '../loading';
import _ from 'lodash';

import './style.css';

const getSuggestionValue = suggestion => suggestion.display_name;
const renderSuggestion = suggestion => <span>{suggestion.display_name}</span>;

const randomPlaces = [
  'Paris, France',
  'Paju, South Korea',
  'Cape Town, South Africa',
  'Isfahan, Iran',
  'Baturiti, Indonesia',
  'Havana, Cuba',
  'Wellington, New Zealand',
  'Guanajuato, Mexico',
  'Colombo, Sri Lanka',
  'Dhaka, Bangladesh',
  'Marrakesh, Morocco',
  'Malindi, Kenya',
  'Thessaloniki, Greece',
  'Ketchikan, Alaska',
  'Seydisfjordur, Iceland',
  'Salzburg, Austria'
];

class SearchFullScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchHasBeenPerformed: false
    };

    this.debouncedLoadSuggestions = _.debounce(props.searchPlaces, 500);
  }

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue });
  };

  gotoPlace = (event, { suggestion }) => {
    const [city, country] = suggestion.display_name.split(', ');
    this.props.gotoPlace(city, country);
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({ searchHasBeenPerformed: true });
    this.debouncedLoadSuggestions(value);
  };

  onSuggestionsClearRequested = () => {
    this.setState({ searchHasBeenPerformed: false });
    this.props.clearPlaces();
  };

  render() {
    const { isLoading, searchResults } = this.props;
    const { value, searchHasBeenPerformed } = this.state;
    return (
      <div className="full-screen-search">
        <label className="search-label">
          {isLoading ? (
            <Loading text="Fetching the best places for you" />
          ) : searchResults.length ? (
            `We found ${searchResults.length} results for your search`
          ) : searchHasBeenPerformed ? (
            `We couldn't find anything ...`
          ) : (
            `Discover beautiful places where you travel`
          )}
        </label>
        <div>
          <Autosuggest
            suggestions={searchResults}
            onSuggestionSelected={(evt, item) => this.gotoPlace(evt, item)}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={{
              placeholder:
                randomPlaces[Math.floor(Math.random() * randomPlaces.length)],
              value,
              onChange: this.onChange,
              autoFocus: true
            }}
          />
        </div>
      </div>
    );
  }
}

export default SearchFullScreen;
