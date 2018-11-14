import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest';
import { Dot } from 'react-animated-dots';

import './style.css'

const getSuggestionValue = suggestion => suggestion
const renderSuggestion = suggestion => <span>{suggestion.display_name}</span>

class SearchFullScreen extends Component {
	onChange = (event, { newValue }) => {
		console.log(newValue)
	}

	gotoPlace = (event, { suggestion }) => {
		const { city, country } = suggestion
		this.props.gotoPlace(city, country)
	}

	onSuggestionsFetchRequested = ({ value }) => {
		this.props.searchPlaces(value)
	}

	onSuggestionsClearRequested = () => {
		this.props.clearPlaces()
	}

	render() {
		const { isLoading, value, searchResults } = this.props
		return (
			<div className="full-screen-search">
				<label className="search-label">{isLoading ? <div>
					Loading
					<Dot>.</Dot>
					<Dot>.</Dot>
					<Dot>.</Dot>
				</div> : searchResults.length ? `We found ${searchResults.length} results for your search`  : 'Find your destination among beautiful places'}</label>
				<div>
					<Autosuggest
						suggestions={searchResults}
						onSuggestionSelected={(evt, item) => this.gotoPlace(evt, item)}
						onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
						onSuggestionsClearRequested={this.onSuggestionsClearRequested}
						getSuggestionValue={getSuggestionValue}
						renderSuggestion={renderSuggestion}
						inputProps={{
							placeholder: "",
							value,
							onChange: this.onChange,
							autoFocus:true
						}}
					/>
				</div>
			</div>
		)
	}
}

export default SearchFullScreen
