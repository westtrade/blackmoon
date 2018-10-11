export const toggleNavbarMenu = ({ navbar = {} }, toggleFlag) => ({
	navbar: {
		menuIsOpen:
			typeof toggleFlag === 'undefined'
				? !navbar.menuIsOpen
				: !!toggleFlag,
	},
})

export const setLoadingStatus = (state, isLoading = false) => ({ isLoading })

export const setTickerData = (state, tickerData = {}) => ({ tickerData })

export const setPairs = (state, pairs = {}) => ({ pairs })
