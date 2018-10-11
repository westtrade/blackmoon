/** @jsx h */
import { h } from 'preact'

import style from './GrowthColor'

const GrowthColor = ({ value = 0, className = '', children }) => {
	value = value.toString()
	const classUp = (value.charAt(0) === '+' && style.up) || ''
	const classDown = (value.charAt(0) === '-' && style.down) || ''

	const directionClass = classUp || classDown || style.up

	return <span className={`${directionClass} ${className}`}>{children}</span>
}

export default GrowthColor
