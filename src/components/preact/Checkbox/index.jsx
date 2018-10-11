/** @jsx h */
import { h, Component } from 'preact'

import style from './Checkbox'

class Checkbox extends Component {
	constructor({ value }) {
		super()

		this.state = {
			value: !!value,
		}

		this.toggleCheckbox = this.toggleCheckbox.bind(this)
	}

	toggleCheckbox(event) {
		if (event) {
			event.preventDefault()
		}

		const { value } = this.state
		this.setState({ value: !value })
	}

	componentWillReceiveProps(newProps) {
		const { value = this.state.value } = newProps
		this.setState({ value })
	}

	render(props, state) {
		const { name, label } = props
		const { value } = state

		return (
			<div
				className={`${style.wrapper}  ${(value && style.checked) ||
					''}`}
				onClick={this.toggleCheckbox}
			>
				<label className={style.elementLabel}>
					<div className={style.checkbox}>
						<div className={style.handler} />
					</div>

					<input
						type="checkbox"
						className={style.element}
						checked={value}
					/>

					{label && <div className={style.label}>{label}</div>}
				</label>
			</div>
		)
	}
}

export default Checkbox
