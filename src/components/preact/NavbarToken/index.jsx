/** @jsx h */
import { h } from 'preact'

import style from './NavbarToken'

export const NavbarToken = ({
	ticker = '',
	tokenTitle = '',
	className = '',
}) => {
	const [from = '', to = ''] = ticker.toUpperCase().split('_')

	return (
		<div className={`${style.wrapper} ${className}`}>
			<div className={style.direction}>
				{from}
				<span className={style.splitter}> / </span>
				{to}
			</div>
			<div className={style.name}>{tokenTitle}</div>
		</div>
	)
}

export default NavbarToken
