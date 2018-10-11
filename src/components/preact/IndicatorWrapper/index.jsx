/** @jsx h */
import { h, Component } from 'preact'

import Icon from '../Icon'
import Toggler from '../Toggler'

import style from './IndicatorWrapper'

export default class IndicatorWrapper extends Component {
	constructor({ isOpen = false }) {
		super()
		this.state = {
			isOpen,
		}

		this.toggleOpen = this.toggleOpen.bind(this)
	}

	toggleOpen() {
		const { isOpen } = this.state
		this.setState({
			isOpen: !isOpen,
		})
	}

	render(
		{ children, className = '', title = '', isActive = false },
		{ isOpen = false },
	) {
		const isClosedClassName = (isOpen && style.isClosed) || ''
		return (
			<Toggler
				isActive={isActive}
				className={`${style.wrapper} ${isClosedClassName}`}
			>
				<div className={style.header} onClick={this.toggleOpen}>
					<div className={style.title}>{title}</div>

					<Icon className="info" type="info" />
					<Icon
						className={style.toggler}
						type={isOpen ? 'caretUp' : 'settings'}
					/>
				</div>
				<div className={`${style.content}`}>{children}</div>
			</Toggler>
		)
	}
}
