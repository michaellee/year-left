function leapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

let year = 365

let currentYear = new Date().getFullYear()

if (leapYear(currentYear)) {
  year = 366
}

const empty = `░`
const fill 	= `▓`
const max 	= 15

const mappings = [
	{ low: 0, 	high: 6 },
	{ low: 7, 	high: 13 },
	{ low: 14, 	high: 20 },
	{ low: 21, 	high: 26 },
	{ low: 27, 	high: 33 },
	{ low: 34, 	high: 40 },
	{ low: 41, 	high: 46 },
	{ low: 47, 	high: 53 },
	{ low: 54, 	high: 60 },
	{ low: 61, 	high: 66 },
	{ low: 67, 	high: 73 },
	{ low: 74, 	high: 80 },
	{ low: 81, 	high: 86 },
	{ low: 87, 	high: 93 },
	{ low: 94, 	high: 100 }
]

for (let i = 1; i <= year; i++) {
	let now = new Date()
	let start = new Date(now.getFullYear(), 0, 0)

	let diff = now - start
	let oneDay = 1000 * 60 * 60 * 24
	let day = i
	let timeLeft  = Math.ceil((1 - (day/year)) * 100)
	let yesterday = Math.ceil((1 - ((day - 1)/year)) * 100)

	let fillCount = 0

	mappings.forEach((mapping, key) => {
		if (timeLeft >= mapping.low) {
			if (timeLeft <= mapping.high) {
				fillCount = key + 1
			}
		}
	})

	let progressEmpty = ''
	let progressFill = ''

	for (let i = 1; i <= fillCount; i++) {
		progressFill += fill
	}

	for (let i = 1; i <= max - fillCount; i++) {
		progressEmpty += empty
	}

	let tweet = `${progressFill}${progressEmpty} ${timeLeft}%\n[${day}/${year}]`

	let timeRan = new Date()

	console.log('===')

	console.log(`${day}/${year}`)

	if (timeLeft < yesterday) {
	  console.log(tweet)
	}

	console.log('^^^')
}
