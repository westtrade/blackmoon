/** @jsx h */
import { h, Component } from 'preact'

import style from './Input'

class Input extends Component {
	constructor() {
		super()
		this.state = {
			isActive: false,
		}

		this.toggleActiveState = this.toggleActiveState.bind(this)
	}

	toggleActiveState(event) {
		const { type } = event
		const { onBlur, onFocus } = this.props

		const isActive = type == 'focus'
		this.setState({ isActive })

		type === 'blur' && onBlur && onBlur(event)
		type === 'focus' && onFocus && onFocus(event)
	}

	render(
		{
			className = '',
			type = 'text',
			error = '',
			label = '',
			children,
			addon,
			...other
		},
		{ isActive = false },
	) {
		return (
			<div
				className={`${style.input} ${className} ${addon &&
					style.hasAddon} ${error && style.hasError} ${(isActive &&
					style.active) ||
					''}`}
			>
				{label && <div className={style.label}>{label}</div>}
				<div className={style.elementWrapper}>
					{type === 'textarea' && (
						<textarea
							onBlur={this.toggleActiveState}
							onFocus={this.toggleActiveState}
							className={style.element}
							rows={1}
							{...other}
						/>
					)}
					{type !== 'textarea' && (
						<input
							onBlur={this.toggleActiveState}
							onFocus={this.toggleActiveState}
							type={type}
							className={style.element}
							{...other}
						/>
					)}
					{addon && <div className={style.addon}>{addon}</div>}
					<div className={style.error}>{error}</div>
				</div>
			</div>
		)
	}
}

export default Input
