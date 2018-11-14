import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest';
import { Dot } from 'react-animated-dots';

import './style.css'

const languages = [
	{
		name: 'C',
		year: 1972
	},
	{
		name: 'C#',
		year: 2000
	},
	{
		name: 'C++',
		year: 1983
	},
	{
		name: 'Clojure',
		year: 2007
	},
	{
		name: 'Elm',
		year: 2012
	},
	{
		name: 'Go',
		year: 2009
	},
	{
		name: 'Haskell',
		year: 1990
	},
	{
		name: 'Java',
		year: 1995
	},
	{
		name: 'Javascript',
		year: 1995
	},
	{
		name: 'Perl',
		year: 1987
	},
	{
		name: 'PHP',
		year: 1995
	},
	{
		name: 'Python',
		year: 1991
	},
	{
		name: 'Ruby',
		year: 1995
	},
	{
		name: 'Scala',
		year: 2003
	}
]

function escapeRegexCharacters(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const getSuggestionValue = suggestion => suggestion.name
const renderSuggestion = suggestion => <span>{suggestion.name}</span>
const getMatchingLanguages = value => {
	const escapedValue = escapeRegexCharacters(value.trim())

	if (escapedValue === '') {
		return []
	}

	const regex = new RegExp('^' + escapedValue, 'i')

	return languages.filter(language => regex.test(language.name))
}

class SearchFullScreen extends Component {
	constructor() {
		super()

		this.state = {
			value: '',
			suggestions: [],
			isLoading: false
		}

		this.lastRequestId = null
	}

	loadSuggestions(value) {
		// Cancel the previous request
		if (this.lastRequestId !== null) {
			clearTimeout(this.lastRequestId)
		}

		this.setState({
			isLoading: true
		})

		// Fake request
		this.lastRequestId = setTimeout(() => {
			this.setState({
				isLoading: false,
				suggestions: getMatchingLanguages(value)
			})
		}, 1000)
	}

	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue
		})
	}

	onSuggestionsFetchRequested = ({ value }) => {
		this.loadSuggestions(value)
	}

	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		})
	}

	render() {
		const { isLoading, value, suggestions } = this.state
		const inputProps = {
			placeholder: "Type 'c'",
			value,
			onChange: this.onChange
		}
		return (
			<div className="full-screen-search">
				<label>{isLoading ? <div>
					Loading
					<Dot>.</Dot>
					<Dot>.</Dot>
					<Dot>.</Dot>
				</div> : 'Type to load suggestions'}</label>
				<div>
					<Autosuggest
						suggestions={suggestions}
						onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
						onSuggestionsClearRequested={this.onSuggestionsClearRequested}
						getSuggestionValue={getSuggestionValue}
						renderSuggestion={renderSuggestion}
						inputProps={inputProps}
					/>
				</div>
			</div>
		)
	}
}

export default SearchFullScreen
