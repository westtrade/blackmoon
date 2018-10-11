/** @jsx h */
import { h, Component } from 'preact'

import Icon from '../Icon'
import style from './IconToggler'

class IconToggler extends Component {
	constructor({ isActive }) {
		super()
		this.state = {
			isActive: !!isActive,
		}

		this.toggleActive = this.toggleActive.bind(this)
	}

	toggleActive() {
		const { isActive } = this.state

		const { onChange, onToggle } = this.props

		if (onToggle) {
			return onToggle(this.props.value || '')
		}

		this.setState({
			isActive: !isActive,
		})

		onChange && onChange(this.state.isActive)
	}

	componentWillReceiveProps({ isActive }) {
		if (typeof isActive === 'undefined') {
			return
		}

		this.setState({
			isActive: !!isActive,
		})
	}

	render({ className = '', type = 'star', size }, { isActive = false }) {
		return (
			<div
				onClick={this.toggleActive}
				className={`${style.wrapper} ${className} ${(isActive &&
					style.active) ||
					''}`}
			>
				<Icon size={size} type={type} className={style.icon} />
			</div>
		)
	}
}

export default IconToggler
