const formatPrice = value => {
	let [integer, fraction] = value.toString().split('.')
	let last = ''

	if (fraction) {
		last = fraction.slice(-3)
		fraction = '.' + fraction.slice(0, fraction.length - 3)
	}

	return [integer.replace(/\B(?=(\d{3})+(?!\d))/g, '$&,'), fraction, last]
}

export default formatPrice
