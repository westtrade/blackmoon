import createStore from 'stockroom/worker'

import * as mainActions from './actions/main'
import * as api from '../libs/api/wex'

let store = createStore({
	navbar: {
		notificationsCount: 0,
		menuIsOpen: false,
		tokenTitle: '',
	},

	user: {
		fullName: 'Jack Morgan',
		avatar: '',
	},

	isLoading: false,
	ticker: '',
	tickerData: {},
	pairs: {},
	filteredPairs: [],

	tokenSelectorFilter: {
		fromFilter: '',
		onlyFavorited: false,
		search: '',
	},

	depth: {},
	favoritePairs: [],
})

const aliasProducts = {
	usd: ['volatile', 'BMx1DV', '1DV'],
	rur: ['top20', 'BMxT20', 'T20'],
	eur: ['delta', 'BMxDDR', 'DDR'],
	btc: ['eemetf', 'BMxEEM', 'EEM'],
	usdt: ['spyetf', 'BMxSPY', 'SPY'],
}

const actions = store => ({
	...mainActions,

	setNavbarInfo(state, payload = {}) {
		return {
			navbar: { ...state.navbar, ...payload },
		}
	},

	filterPairs({
		ticker,
		pairs,
		tokenSelectorFilter = {},
		favoritePairs = [],
	}) {
		const filteredPairs = Object.entries(pairs).reduce(
			(result = [], [pair, data]) => {
				if (
					tokenSelectorFilter.onlyFavorited &&
					!~favoritePairs.indexOf(pair)
				) {
					return result
				}

				if (pair.indexOf(tokenSelectorFilter.fromFilter) !== 0) {
					return result
				}

				const [, productAlias] = pair.split('_')

				const [product, productLabel] =
					aliasProducts[productAlias] || []

				return [
					...result,
					{
						pair,
						product,
						productLabel,
					},
				]
			},
			[]
		)
		// .slice(0, 10)

		return { filteredPairs }
	},

	setFromFilters({ tokenSelectorFilter = {} }, filters = {}) {
		return { tokenSelectorFilter: { ...tokenSelectorFilter, ...filters } }
	},

	setFavoritePairs(state, favoritePairs = []) {
		return { favoritePairs }
	},

	toggleFavoritePair({ favoritePairs = [] }, pair) {
		const favoritePairIdx = favoritePairs.indexOf(pair)
		const pairIsFavorite = !!~favoritePairIdx
		const newFavoritePairsList = pairIsFavorite
			? favoritePairs.filter(_ => _ !== pair)
			: [...favoritePairs, pair]

		this.setFavoritePairs(newFavoritePairsList)
	},

	changeFromFilter(state, fromFilter = 'btc') {
		this.setFromFilters({ fromFilter })
		this.filterPairs()
	},

	toggleFavoriteFilter({ tokenSelectorFilter }, payload) {
		const onlyFavorited =
			typeof payload === 'undefined' || payload === ''
				? !tokenSelectorFilter.onlyFavorited
				: !!payload

		this.setFromFilters({
			onlyFavorited,
		})

		this.filterPairs()
	},

	//TODO Move to change ticker and fetch ticker data
	loadTicker(state, ticker = 'btc_usd') {
		const [from, to] = ticker.split('_')

		const [, , tokenTitle] = aliasProducts[to] || []

		this.setNavbarInfo({
			tokenTitle,
		})

		this.setFromFilters({
			fromFilter: from,
		})

		this.setLoadingStatus(true)
		api.ticker(ticker).then(tickerData => {
			this.setTickerData(tickerData)
			this.setLoadingStatus(false)
		})

		return { ticker }
	},

	loadInfo() {
		this.setLoadingStatus(true)
		api.info().then(data => {
			this.setPairs(data.pairs)
			this.filterPairs()
			this.setLoadingStatus(false)
		})
	},

	setDepthData(state, depth) {
		return { depth: { ...state.depth, ...depth } }
	},

	loadDepth({ ticker }) {
		api.depth(ticker).then(result => {
			this.setDepthData(result)
		})
	},

	bootstrapFront(state, ticker) {
		this.loadTicker(ticker)
		this.loadDepth(ticker)
	},
})

store.registerActions(actions)
