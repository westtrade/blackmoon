/** @jsx preact.h */
import preact, { render } from 'preact'

import * as api from '../../libs/api/wex'

import style from './OverviewPage'

import Logo from '../../components/preact/Logo'
import ProductLogo from '../../components/preact/ProductLogo'
import Icon from '../../components/preact/Icon'
import Divider from '../../components/preact/Divider'
import MidPriceChart from '../../components/preact/MidPriceChart'
import PreviewSection from '../../components/preact/PreviewSection'
import Checkbox from '../../components/preact/Checkbox'
import Toggler from '../../components/preact/Toggler'
import IconToggler from '../../components/preact/IconToggler'
import DropdownToggler from '../../components/preact/DropdownToggler'
import CollapseToggler from '../../components/preact/CollapseToggler'
import IndicatorWrapper from '../../components/preact/IndicatorWrapper'
import MidPriceWidget from '../../components/preact/MidPriceWidget'

import TokenSelector from '../../components/preact/TokenSelector'
import Token from '../../components/preact/Token'
import Input from '../../components/preact/Input'

import { connect } from 'unistore/preact'

import {
	PreviewLogosGrid,
	PreviewProductLogosGrid,
	PreviewIconsGrid,
} from '../../components/preact/PreviewGrids'

import { Isle, IsleHeader, IsleBody } from '../../components/preact/Isle'

class OverviewPage extends preact.Component {
	constructor() {
		super()

		this.state = {
			pairData: {
				asks: [],
				bids: [],
			},

			orderBy: '',
			orderDirection: false,
		}

		this.onOrderChange = this.onOrderChange.bind(this)
	}

	onOrderChange({ orderDirection, orderBy }) {
		this.setState({
			orderBy,
			orderDirection,
		})
	}

	componentDidMount() {
		const pair = 'btc_usd'

		api.depth(pair).then(data =>
			this.setState({
				pairData: data[pair],
			})
		)
	}

	testIncrement() {}

	render(
		{ count = 0, incrementCount },
		{ pairData = {}, orderDirection, orderBy }
	) {
		return (
			<div className={style.wrapper}>
				<div>
					<button onClick={incrementCount}>Increment</button>
					{count}
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'flex-start',
					}}
				>
					<TokenSelector
						style={{
							marginRight: '10px',
						}}
						orderBy={orderBy}
						orderDirection={orderDirection}
						onOrderChange={this.onOrderChange}
					>
						<Token
							product="xiaomi"
							productLabel="BMxXMI"
							growthPercent="83.02%"
							price={0.0121423}
							volume={2102}
						/>
						<Divider />
						<Token
							product="spyetf"
							productLabel="BMxSPY"
							growthPercent="-2.50%"
							price={0.0121423}
							volume={2102.0031809}
							product="spyetf"
						/>
						<Divider />
						<Token product="top20" />
						<Divider />
						<Token product="top20" />
						<Divider />
						<Token product="top20" />
						<Divider />
						<Token product="top20" />
						<Divider />
						<Token product="top20" />
						<Divider />
						<Token product="top20" />
						<Divider />
						<Token product="top20" />
						<Divider />
						<Token product="top20" />
						<Divider />
						<Token product="top20" />
						<Divider />
						<Token product="top20" />
						<Divider />
						<Token product="top20" />
						<Divider />
						<Token product="top20" />
						<Divider />
						<Token product="top20" />
						<Divider />
						<Token product="top20" />
						<Divider />
						<Token product="top20" />
					</TokenSelector>
					<MidPriceWidget
						style={{
							maxWidth: 260,
							marginRight: '10px',
						}}
						{...pairData}
					/>
					<MidPriceWidget isVertical={true} {...pairData} />
				</div>

				<Isle>
					<IsleHeader>Mid Price Chart</IsleHeader>
					<IsleBody>
						<MidPriceChart width={232} cols={6} />
						<MidPriceChart width={272} cols={6} />
						<MidPriceChart width={472} cols={12} />
						<MidPriceChart
							width={230}
							cols={6}
							isVertical={true}
							style={{
								float: 'right',
							}}
						/>

						<Checkbox />
					</IsleBody>
				</Isle>

				<div className={style.twoColumns}>
					<Isle>
						<IsleHeader>inputs</IsleHeader>
						<IsleBody>
							<Input
								label="Label"
								value="0.33"
								type="number"
								addon="BTC"
							/>
							<Input
								label="Label"
								value="0.33"
								type="number"
								addon="BTC"
								error="error"
							/>
						</IsleBody>
						<Divider />
						<IsleBody>
							<Input />
							<Input type="number" />
							<Input type="textarea" />
						</IsleBody>
					</Isle>
				</div>

				<Divider />

				<div className={style.twoColumns}>
					<Isle>
						<IsleHeader>Icons</IsleHeader>
						<IsleBody>
							<PreviewSection
								title="Clickable"
								description="25x25px"
							>
								<PreviewIconsGrid>
									<Icon type="coins" color="grey" />
									<Icon type="graph" color="grey" />
									<Icon type="candles" color="grey" />
									<Icon type="refresh" color="grey" />
									<Icon type="portfolio" color="grey" />
									<Icon type="caretDown" color="grey" />
									<Icon type="caretUp" color="grey" />
									<Icon type="search" color="grey" />
									<Icon type="wallet" color="grey" />
									<Icon type="info" color="grey" />
									<Icon type="plus" color="grey" />
									<Icon type="minus" color="grey" />
									<Icon type="cancel" color="grey" />
									<Icon type="expand" color="grey" />
									<Icon type="collapse" color="grey" />
									<Icon type="settings" color="grey" />
									<Icon type="deposit" color="green" />
									<Icon type="withdraw" color="pink" />
									<Icon type="tick" color="green" />
									<Icon type="star" color="blue" />
									<Icon type="tool1" color="grey" />
									<Icon type="tool2" color="grey" />
									<Icon type="tool3" color="grey" />
									<Icon type="tool4" color="grey" />
									<Icon type="tool5" color="grey" />
									<Icon type="tool6" color="grey" />
									<Icon type="tool7" color="grey" />
									<Icon type="tool8" color="grey" />
									<Icon type="tool9" color="grey" />
									<Icon type="tool10" color="grey" />
									<Icon type="tool11" color="grey" />
									<Icon type="tool12" color="grey" />
									<Icon type="tool13" color="grey" />
									<Icon type="tool14" color="grey" />
									<Icon type="rejected" color="grey" />
									<Icon type="hide" color="grey" />
								</PreviewIconsGrid>
							</PreviewSection>
						</IsleBody>
						<Divider />

						<IsleBody>
							<PreviewSection title="Colors">
								<PreviewIconsGrid>
									<Icon type="coins" color="grey" />
									<Icon type="graph" color="green" />
									<Icon type="candles" color="pink" />
									<Icon type="cancel" color="cancel" />
									<Icon type="refresh" />

									<Icon type="bell" color="grey" />
									<Icon type="logout" color="green" />
									<Icon type="menu" color="pink" />
								</PreviewIconsGrid>
							</PreviewSection>
						</IsleBody>

						<Divider />

						<IsleBody>
							<PreviewSection
								title="Clickable"
								description="30x30px"
							>
								<PreviewIconsGrid>
									<Icon type="bell" />
									<Icon type="logout" />
									<Icon type="menu" />
									<Icon type="close" />
									<Icon type="back" />
								</PreviewIconsGrid>
							</PreviewSection>
						</IsleBody>
					</Isle>

					<Isle>
						<IsleHeader>LOGOS</IsleHeader>

						<IsleBody>
							<PreviewSection title="PLATFORM">
								<PreviewLogosGrid>
									<Logo />
									<Logo isComplex={false} />
								</PreviewLogosGrid>
							</PreviewSection>
						</IsleBody>
						<Divider />

						<IsleBody>
							<PreviewSection
								title="Products"
								description="70x40px"
							>
								<PreviewProductLogosGrid>
									<ProductLogo logo="volatile" />
									<ProductLogo logo="top20" />
									<ProductLogo logo="delta" />
									<ProductLogo logo="eemetf" />
									<ProductLogo logo="spyetf" />
									<ProductLogo logo="xiaomi" />
									<ProductLogo logo="gargoyle" />
									<ProductLogo logo="primemeridian" />
									<ProductLogo logo="xrp" />
									<ProductLogo logo="bch" />
									<ProductLogo logo="eos" />
									<ProductLogo logo="ltc" />
									<ProductLogo logo="bmc" />
									<ProductLogo logo="eth" />
									<ProductLogo logo="btc" />
									<ProductLogo logo="usdt" />
								</PreviewProductLogosGrid>
							</PreviewSection>
						</IsleBody>
					</Isle>
				</div>
				<Isle>
					<IsleHeader>Toggles</IsleHeader>
					<IsleBody>
						<IconToggler type="star" />
						<IconToggler type="star" isActive />
						<IconToggler type="bell" onToggle={() => {}} />
					</IsleBody>
					<Divider />
					<IsleBody>
						<DropdownToggler>
							<Icon type="tool4" />
						</DropdownToggler>
					</IsleBody>

					<Divider />

					<IsleBody>
						<CollapseToggler />
					</IsleBody>

					<Divider />

					<IsleBody>
						<IndicatorWrapper title="MACD">Test</IndicatorWrapper>
						<IndicatorWrapper title="MACD" isActive>
							Test
						</IndicatorWrapper>

						<IndicatorWrapper isOpen title="MACD">
							Test
						</IndicatorWrapper>
						<IndicatorWrapper isOpen title="MACD" isActive>
							Test
						</IndicatorWrapper>
					</IsleBody>

					<IsleBody>
						<Checkbox label="BMxGRL only" />

						<br />

						<Toggler>
							<Icon type="collapse" color="grey" size={16} />
						</Toggler>

						<Toggler>100%</Toggler>
						<Toggler active={true}>100%</Toggler>

						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
					</IsleBody>
				</Isle>
			</div>
		)
	}
}

export default connect(
	'count',
	store => ({
		incrementCount: () => {
			return {
				type: 'increment',
				payload: 'Test',
			}
		},
	})
)(OverviewPage)
