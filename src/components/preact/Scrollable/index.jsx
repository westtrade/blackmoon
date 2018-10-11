/** @jsx h */
import { h, Component } from 'preact'

import baron from 'baron'
import PerfectScrollbar from 'perfect-scrollbar'
import style from './Scrollable'

export default class Scrollable extends Component {
	constructor() {
		super()
		this.ps = null

		this.state = {
			hasBottomScroll: false,
			hasTopScroll: false,
		}

		this.updateEdgeGradients = this.updateEdgeGradients.bind(this)
	}

	componentDidMount() {
		this.ps = new PerfectScrollbar(this.scrollableElement)
		this.updateEdgeGradients()
	}

	componentWillUnmount() {
		if (!this.ps) {
			return
		}

		this.ps.destroy()
		this.ps = null
	}

	componentDidUpdate() {
		if (!this.ps) {
			return
		}
		this.updateEdgeGradients()
		this.ps.update()
	}

	updateEdgeGradients() {
		const { scrollTop, scrollHeight, offsetHeight } = this.scrollableElement

		const hasTopScroll = Math.floor(scrollTop) > 0
		const hasBottomScroll =
			scrollHeight - Math.ceil(offsetHeight + scrollTop) > 0

		if (
			hasTopScroll !== this.state.hasTopScroll ||
			hasBottomScroll !== this.state.hasBottomScroll
		) {
			this.setState({ hasTopScroll, hasBottomScroll })
		}
	}

	render(
		{ children, className = '' },
		{ hasBottomScroll = false, hasTopScroll = false },
	) {
		const gradients = `${(hasTopScroll && style.hasTop) ||
			''} ${(hasBottomScroll && style.hasBottom) || ''}`

		return (
			<div className={`${style.wrapper} ${className} ${gradients}`}>
				<div
					className={style.container}
					ref={element => (this.scrollableElement = element)}
					onScroll={this.updateEdgeGradients}
				>
					{children}
				</div>
			</div>
		)
	}
}
