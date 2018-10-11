/** @jsx h */
import { h } from 'preact'

import style from './Icon'
import * as Icons from './Icons'

const upper = input => input.replace(/^\w/, _ => _.toUpperCase())

const Icon = ({ className = '', type = '', color = '', onClick, size }) => {
	const Icon = Icons[upper(type)]

	const isUndefined = typeof Icon === 'undefined'

	return (
		<div className={`${style.wrapper} ${className}`} onClick={onClick}>
			{isUndefined && (type || 'Icon type not defined!')}
			{!isUndefined && (
				<Icon
					className={`${style.icon} ${style[color] || ''}`}
					size={size}
				/>
			)}
		</div>
	)
}

export default Icon
