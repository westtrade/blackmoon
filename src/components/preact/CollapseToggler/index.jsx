/** @jsx h */
import { h, Component } from 'preact'

import Icon from '../Icon'
import Toggler from '../Toggler'

import style from './CollapseToggler'

class CollapseToggler extends Component {
	constructor({ isActive = false }) {
		super()
		this.state = { isActive }
		this.toggleActive = this.toggleActive.bind(this)
	}

	componentWillReceiveProps({ isActive }) {
		if (typeof isActive !== 'undefined') {
			this.setState({ isActive })
		}
	}

	toggleActive() {
		const { onChange } = this.props
		const { isActive } = this.state
		;(onChange && onChange({ isActive })) ||
			this.setState({
				isActive: !isActive,
			})
	}

	render({ className = '' }, { isActive = false }) {
		return (
			<Toggler
				onClick={this.toggleActive}
				isActive={true}
				className={`${className} ${style.wrapper}`}
			>
				<Icon type={isActive ? 'collapse' : 'expand'} />
			</Toggler>
		)
	}
}

export default CollapseToggler
