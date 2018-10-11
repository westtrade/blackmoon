/** @jsx h */
import './style/main.styl'

// import 'core-js/shim' // included < Stage 4 proposals

import { h, render } from 'preact'
import { Provider } from 'unistore/preact'

import Router from 'preact-router'
import AsyncRoute from 'preact-async-route'
import injectTapEventPlugin from 'preact-tap-event-plugin'

injectTapEventPlugin()

// import OverviewPage from './pages/OverviewPage'
import FrontPage from './pages/FrontPage'

import Loading from './components/preact/Loading'
import Layout from './components/preact/Layout'
import GoogleFonts from './components/preact/GoogleFonts'

import store from './store'

const App = () => (
	<Provider store={store}>
		<Layout>
			<GoogleFonts />
			<Router
				onChange={({ current, url, ...other }) =>
					store.action('toggleNavbarMenu')(false)
				}
			>
				<AsyncRoute
					path="/develop"
					getComponent={() =>
						import('./pages/OverviewPage').then(
							module => module.default
						)
					}
					loading={() => <Loading />}
				/>

				<FrontPage path="/:pair?" />
			</Router>
		</Layout>
	</Provider>
)

store.action('loadInfo')()
render(<App />, document.getElementById('app'))
