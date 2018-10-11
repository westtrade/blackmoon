import formatPrice from '../src/components/preact/FormatPrice/formatPrice'

test('Test price mask', () => {
	const [integer, fraction, last] = formatPrice(138072.30878)
	expect(integer).toBe('138,072')
})
