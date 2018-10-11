/** @jsx h */
import { h } from 'preact'

import style from './Hamburger'

const Hamburger = ({ className = '', isOpen = false, onClick }) => {
	const openClassName = (isOpen && style.isOpen) || ''
	return (
		<div
			onClick={onClick}
			className={`${style.wrapper} ${className} ${openClassName}`}
		>
			<div className={style.icon}>
				<span />
				<span />
				<span />
			</div>
		</div>
	)
}

export default Hamburger
