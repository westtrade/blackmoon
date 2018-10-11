/** @jsx h */
import { h } from 'preact'
import style from './ProductLogo'

import * as logos from './Logos'

const upper = input => (input || '').replace(/^\w/, _ => _.toUpperCase())

const ProductLogo = ({ className = '', size = 70, logo = '' }) => {
	const Icon = logos[upper(logo)]

	return (
		<div className={`${className} ${style.wrapper}`}>
			<Icon className={style.logo} size={size} />
		</div>
	)
}

export default ProductLogo
