import localforage from 'localforage'

const hashString = s =>
	s.split('').reduce((a, b) => {
		let start = a
		start = (start << 5) - start + b.charCodeAt(0)
		return start & start
	}, 0)

const fetch = (url, options, timeout = 10) => {
	const cacheKey = hashString(url)
	return Promise.all([
		localforage.getItem(cacheKey),
		localforage.getItem(`${cacheKey}:ts`),
	]).then(([cached, ts]) => {
		const cacheExpired = Date.now() >= ts
		if (cached && !cacheExpired) {
			return new Response(new Blob([cached]))
		}

		if (cacheExpired) {
			localforage.removeItem(cacheKey)
			localforage.removeItem(`${cacheKey}:ts`)
		}

		return global.fetch(url, options).then(response => {
			const responseSuccess = response.status === 200
			const contentType = response.headers.get('Content-Type')
			const responseCanBeCached = contentType.match(
				/(application\/json|text)/i
			)

			if (responseSuccess && responseCanBeCached) {
				const nextCacheTimeStamp = Date.now() + timeout * 1000 * 60

				response
					.clone()
					.text()
					.then(content =>
						Promise.all([
							localforage.setItem(cacheKey, content),
							localforage.setItem(
								`${cacheKey}:ts`,
								nextCacheTimeStamp
							),
						])
					)
			}

			return response
		})
	})
}

export default fetch
