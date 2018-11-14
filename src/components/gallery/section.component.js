import React, { Component } from 'react'
import Gallery from './gallery.component';

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