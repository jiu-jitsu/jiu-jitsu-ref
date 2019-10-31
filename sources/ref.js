
/**
 *
 */

const formatXX = (value) => value > 9
	? value
	: `0${value}`

/**
 *
 */

const formatXXX = (value) => value > 99
	? value
	: value > 9 ? `0${value}` : `00${value}`

/**
 *
 */

const getRandomIntInclusive = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 */

module.exports = () => {
	const YYYY = getRandomIntInclusive(2000, 9000)
	const MM = getRandomIntInclusive(1, 12)
	const DD = getRandomIntInclusive(1, 27)
	const hh = getRandomIntInclusive(0, 23)
	const mm = getRandomIntInclusive(0, 59)
	const ss = getRandomIntInclusive(0, 59)
	const mss = getRandomIntInclusive(0, 999)
	const date = new Date(`${YYYY}-${formatXX(MM)}-${formatXX(DD)}T${formatXX(hh)}:${formatXX(mm)}:${formatXX(ss)}.${formatXXX(mss)}Z`)
	const value = `${date.valueOf().toString(36).toUpperCase().replace(/[O]/g, `0`)}X`
	return `${value.substr(0, 4)}/${value.substr(4, 6)}`
}
