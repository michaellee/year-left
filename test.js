const timeUtility = require('./src/utilities/time')
const graphicUtility = require('./src/utilities/graphic')

let year = 365

let currentYear = new Date().getFullYear()

if (timeUtility.isLeapYear(currentYear)) {
  year = 366
}

for (let i = 1; i <= year; i++) {
	let now = new Date()
	let start = new Date(now.getFullYear(), 0, 0)

	let diff = now - start
	let oneDay = 1000 * 60 * 60 * 24
	let day = i
	let timeLeft  = Math.ceil((1 - (day/year)) * 100)
	let yesterday = Math.ceil((1 - ((day - 1)/year)) * 100)

	let tweet = `${graphicUtility.drawLine(timeLeft)} ${timeLeft}%\n[${day}/${year}]`

	let timeRan = new Date()

	console.log('===')

	console.log(`${day}/${year}`)

  if (day === 1) {
    let newYear = `🤖 Happy new year, human! Hope you have an awesome year! 🎉\n`
    console.log(newYear + tweet)
  }

	if (timeLeft < yesterday) {
	  console.log(tweet)
	}

	console.log('^^^')
}
