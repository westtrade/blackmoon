/** @jsx h */
import { h } from 'preact'

import FormatPrice from '../FormatPrice'
import GrowthColor from '../GrowthColor'

import style from './NavbarPrice'

const NavbarPrice = ({
	className = '',
	label = '',
	value = '',
	changed = '',
}) => {
	return (
		<div className={`${style.wrapper} ${className}`}>
			<div className={style.label}>{label}</div>
			<FormatPrice className={style.price} value={value} />
			{changed && (
				<GrowthColor value={changed} className={style.changed}>
					{`  ${changed}`}
				</GrowthColor>
			)}
		</div>
	)
}

export default NavbarPrice
