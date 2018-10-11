/** @jsx h */
import { h } from 'preact'

import style from './UserAvatar'

const makeInitials = (userName = '') => {
	const [first = '', last = ''] = userName.split(' ')
	return first.charAt(0).toUpperCase() + last.charAt(0).toUpperCase()
}

const UserAvatar = ({ userName = '', className = '' }) => {
	const initials = makeInitials(userName)

	return (
		<div className={`${style.wrapper} ${className}`}>
			<div className={style.initials}>{initials}</div>
		</div>
	)
}

export default UserAvatar
