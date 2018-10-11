/** @jsx h */
import { h, Component } from 'preact'

import DropdownToggler from '../DropdownToggler'

import style from './Dropdown'

export default class Dropdown extends Component {
	constructor({ isOpen = false }) {
		super()

		this.state = {
			isOpen,
		}
	}

	render({ className = '', activator, children, isOutlined }, { isOpen }) {
		const openClass = (isOpen && style.isOpen) || ''
		return (
			<div className={`${style.wrapper} ${className} ${openClass}`}>
				<DropdownToggler
					isOutlined={isOutlined}
					isActive={isOpen}
					className={style.activator}
				>
					{activator}
				</DropdownToggler>
				<div className={style.content}>{children}</div>
			</div>
		)
	}
}
