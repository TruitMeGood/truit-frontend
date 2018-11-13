import React from 'react'
import './style.css'

const Gallery = ({ images, onClick }) => {
	if (!images) return

	const gallery = images.map((obj, i) => {
		return (
            <div className="thumbnail" key={obj.id}>
                <a href={obj.id} onClick={onClick}>
                    <img src={obj.img} alt={obj.title} className={'source'} />
                </a>
                <div className="title">
                    {obj.title}
                </div>
            </div>
		)
	})

	return <div className='gallery'>{gallery}</div>
}

export default Gallery
