/** @jsx h */
import { h } from 'preact'

import Icon from '../Icon'

import style from './SortDirection'

const DirectionIcon = ({ isUp = false, className = '' }) => {
	const path = isUp
		? 'M2.5 0L4.66506 3H0.334936L2.5 0Z'
		: 'M2.5 3L4.66506 0H0.334936L2.5 3Z'

	return (
		<svg
			width="5"
			height="3"
			viewBox="0 0 5 3"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path d={path} fill="#97A3D0" />
		</svg>
	)
}

const SortDirection = ({
	children,
	className = '',
	orderDirection = false,
	orderByKey = '',
	orderBy,
	onOrderChange = () => {},
}) => {
	const isActive = orderByKey === orderBy

	return (
		<span
			onClick={() => {
				const currentOrderDirection = isActive ? !orderDirection : false
				onOrderChange({
					orderBy: orderByKey,
					orderDirection: currentOrderDirection,
				})
			}}
			className={`${style.wrapper} ${className} ${(isActive &&
				style.isActive) ||
				''}`}
		>
			{children}
			<span className={style.iconWrapper}>
				<DirectionIcon className={style.icon} isUp={orderDirection} />
			</span>
		</span>
	)
}

export default SortDirection
