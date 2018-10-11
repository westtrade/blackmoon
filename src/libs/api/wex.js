import 'whatwg-fetch'
import fetch from '../cachedFetch'

// const WEX_SERVER = `https://wex.nz`;
const WEX_SERVER = `https://cors.io/?https://wex.nz`
// const WEX_SERVER = `https://crossorigin.me/https://wex.nz`

// const WEX_SERVER = '/wex';

const FETCH_DEFAULT_SETTINGS = {
	// credentials: 'include'
	// mode: 'no-cors'
}

export const ticker = pair => {
	return fetch(
		`${WEX_SERVER}/api/3/ticker/${pair}`,
		FETCH_DEFAULT_SETTINGS
	).then(response => response.json())
}

export const depth = pair => {
	return fetch(
		`${WEX_SERVER}/api/3/depth/${pair}`,
		FETCH_DEFAULT_SETTINGS
	).then(response => response.json())
}

export const info = () => {
	return fetch(`${WEX_SERVER}/api/3/info`, FETCH_DEFAULT_SETTINGS).then(
		response => response.json()
	)
}
