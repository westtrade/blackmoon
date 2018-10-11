/** @jsx h */
import { h, Component } from 'preact'
import draw, {
	HORIZONTAL_GRAPH_DIRECTION,
	VERTICAL_GRAPH_DIRECTION,
} from './drawer'

import style from './MidPriceChart'

export default class MidPriceChart extends Component {
	constructor() {
		super()
		this.state = {}
		this.updateChart = this.updateChart.bind(this)
	}

	updateChart(event, props = false) {
		const { cols, rows, isVertical = false } = props || this.props

		const meta = {
			cols,
			rows,
			isVertical,
		}

		const data = {}
		draw(this.canvasElement, data, meta)
	}

	componentDidMount() {
		this.updateChart()
		window.addEventListener('resize', this.updateChart)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateChart)
	}

	componentWillReceiveProps(nextProps) {
		this.updateChart(null, nextProps)
	}

	render(props, state) {
		const {
			width,
			height,
			className = '',
			children,
			style: inputStyle,
		} = props

		const sideLabels = [100, 200, 300]
		const bottomLabels = ['0.07000', '0.07050', '0.007100']

		return (
			<div
				className={`${style.wrapper} ${className}`}
				style={{
					...inputStyle,
					maxWidth: width,
					maxHeight: height,
				}}
			>
				<canvas
					className={style.canvas}
					ref={element => (this.canvasElement = element)}
				/>

				<div className={style.overlay}>
					<div className={style.topLabels}>
						<div className={style.midpriceLabel}>Mid Price</div>
						<div className={style.midpriceValue}>0.0705161</div>
					</div>

					<div className={style.sideLabels}>
						{sideLabels.map((label, key) => (
							<div className={style.sideLabel}>{label}</div>
						))}
					</div>

					<div className={style.bottomLabels}>
						{bottomLabels.map((label, key) => (
							<div className={style.bottomLabel}>{label}</div>
						))}
					</div>

					{children}
				</div>
			</div>
		)
	}
}
