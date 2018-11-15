/*import React from 'react'
import Button from '@material-ui/core/Button'

import moment from 'moment'

import './poi-info.css'
require('moment/locale/fr.js')
moment.locale('fr')

const PoiInfo = ({ info }) => {
	const isContribution = info.entourage_type === 'contribution'
	return (
		<div className="poiInfo-container">
			<div className="poiInfo-header">
				<div className="poiInfo-title">{info.title}</div>
				<div className="poiInfo-date">
					{isContribution ? 'Crée' : 'Demandé'} le{' '}
					{moment(info.created_at).format('DD MMMM YYYY')}
				</div>
			</div>
			<div className="poiInfo-cta">
				<a target="_new" href={`${info.share_url}`}>
					<Button>{isContribution ? 'Participer' : 'Aider'}</Button>
				</a>
			</div>
		</div>
	)
}

export default PoiInfo
*/