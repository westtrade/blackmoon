/** @jsx h */
import { h } from 'preact'

import style from './Toggler'

const Toggler = ({
	children,
	className = '',
	isActive = false,
	isOutlined = false,
	tabIndex = 0,
	onClick,
}) => {
	const activeClass = (isActive && style.active) || ''
	const outlinedClass = (isOutlined && style.outlined) || ''

	return (
		<div
			onClick={onClick}
			tabindex={tabIndex}
			className={`${
				style.toggler
			} ${className} ${activeClass} ${outlinedClass}`}
		>
			{children}
		</div>
	)
}

export default Toggler
