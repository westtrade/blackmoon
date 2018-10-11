/** @jsx h */
import { h } from 'preact'
import formatPrice from './formatPrice'

import style from './FormatPrice'

const FormatPrice = ({ value = '', className = '' }) => {
	const [integer, fraction, last] = formatPrice(value)
	return (
		<span className={`${style.wrapper} ${className}`}>
			{integer}
			{fraction}
			{last && <span className={style.last}>{last}</span>}
		</span>
	)
}

export default FormatPrice
