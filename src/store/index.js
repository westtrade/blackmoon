import createStore from 'stockroom'
import StoreWorker from 'worker-loader!./worker'

import devtools from 'unistore/devtools'

const store =
	process.env.NODE_ENV === 'production'
		? createStore(new StoreWorker())
		: devtools(createStore(new StoreWorker()))

export default store
