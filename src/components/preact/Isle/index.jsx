/** @jsx h */
import { h } from 'preact'

import style from './Isle'

export const Isle = ({ className = '', children, ...other }) => (
	<div className={`${style.isle} ${className}`} {...other}>
		{children}
	</div>
)

export default Isle

export const IsleHeader = ({ className = '', children, ...other }) => (
	<div className={`${style.header} ${className}`} {...other}>
		{children}
	</div>
)

export const IsleBody = ({ className = '', children, ...other }) => (
	<div className={`${style.body} ${className}`} {...other}>
		{children}
	</div>
)
