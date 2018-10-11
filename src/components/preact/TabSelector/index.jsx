/** @jsx h */
import { h } from 'preact'

import style from './TabSelector'

const TabSelector = ({
	className = '',
	options = {},
	active = '',
	theme = '',
	onChange = active => {},
}) => {
	return (
		<div className={`${style.wrapper} ${className} ${style[theme] || ''}`}>
			{Object.entries(options).map(([key, label], idx) => {
				const isActive = (!active && idx === 0) || key === active
				const activeClass = (isActive && style.active) || ''
				return (
					<div
						onClick={() => onChange(key)}
						className={`${style.item} ${activeClass}`}
					>
						{label}
					</div>
				)
			})}
		</div>
	)
}

export default TabSelector
