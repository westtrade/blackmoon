/** @jsx h */
import { h } from 'preact'

import Icon from '../Icon'
import style from './NavbarNotifications'

export const NavbarNotifications = ({ count = 0, className = '' }) => {
	return (
		<div className={`${style.wrapper} ${className}`}>
			<Icon className={style.icon} type="bell" />
			<div className={style.counter}>{count}</div>
		</div>
	)
}

export default NavbarNotifications
