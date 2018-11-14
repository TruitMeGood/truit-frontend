import React, { Component } from 'react'
import Gallery from '../gallery';

class Section extends Component {
    componentDidMount() {
        this.props.getPopular()
    }

    render() {
        const { items } = this.props
        return (<Gallery items = {items} />)
    }
}

export default Section