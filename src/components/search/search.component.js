import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { Dot } from 'react-animated-dots';
import _ from 'lodash';

import './style.css';

const getSuggestionValue = suggestion => suggestion;
const renderSuggestion = suggestion => <span>{suggestion.display_name}</span>;

class SearchFullScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.debouncedLoadSuggestions = _.debounce(props.searchPlaces, 500);
  }

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue });
  };

  gotoPlace = (event, { suggestion }) => {
    const { city, country } = suggestion;
    this.props.gotoPlace(city, country);
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.debouncedLoadSuggestions(value);
  };

  onSuggestionsClearRequested = () => {
    this.props.clearPlaces();
  };

  render() {
    const { isLoading, searchResults } = this.props;
    const { value } = this.state;
    return (
      <div className="full-screen-search">
        <label className="search-label">
          {isLoading ? (
            <div>
              Fetching the best places for you
              <Dot>.</Dot>
              <Dot>.</Dot>
              <Dot>.</Dot>
            </div>
          ) : searchResults.length ? (
            `We found ${searchResults.length} results for your search`
          ) : (
            'Discover beautiful places where you travel'
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
              placeholder: 'Paris, France',
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
