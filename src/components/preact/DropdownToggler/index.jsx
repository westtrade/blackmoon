/** @jsx h */
import { h, Component } from 'preact'
import Toggler from '../Toggler'
import Icon from '../Icon'

import style from './DropdownToggler'

export default class DropdownToggler extends Component {
	constructor({ isActive = false }) {
		super()

		this.state = {
			isActive,
		}

		this.toggleActive = this.toggleActive.bind(this)
	}

	toggleActive() {
		const { isActive } = this.state
		this.setState({
			isActive: !isActive,
		})
	}

	componentWillReceiveProps({ isActive }) {
		this.setState({
			isActive,
		})
	}

	render({ children, isOutlined = false, className = '' }, { isActive }) {
		return (
			<Toggler
				className={`${style.wrapper}  ${className}`}
				onClick={this.toggleActive}
				isActive={isActive}
				isOutlined={isOutlined}
			>
				{children}

				<Icon
					className={style.icon}
					type={!isActive ? 'caretDown' : 'caretUp'}
				/>
			</Toggler>
		)
	}
}
