/** @jsx h */
import { Component, h, render } from 'preact'
import TokenSelectorWidget from '../../components/preact/TokenSelectorWidget'
import MidPriceWidget from '../../components/preact/MidPriceWidget'

import { connect } from 'unistore/preact'

import style from './FrontPage'

export class FrontPage extends Component {
	componentWillMount() {
		this.props.bootstrap(this.props.pair)
	}

	componentWillReceiveProps({ pair }) {
		this.props.bootstrap(pair)
	}

	render({ className = '' }) {
		return (
			<div className={`${style.wrapper} ${className}`}>
				<TokenSelectorWidget className={style.tokenSelector} />
				<div className={style.chart}> </div>
				<div className={style.tradeForm}> </div>
				<MidPriceWidget className={style.midPrice} />
				<div className={style.ordersTable}> </div>
			</div>
		)
	}
}

const mapDispatch = dispatch => ({
	bootstrap: payload => ({
		type: 'bootstrapFront',
		payload,
	}),
})

export default connect(
	'pair',
	mapDispatch
)(FrontPage)
