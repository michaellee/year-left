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

let drawLine = (timeLeft) => {
  // Checks to see if last day of year, if it is then render completely empty
  // line.
  if (timeLeft === 0) {
    let line = ''
    for (let i = 1; i <= max; i++) {
      line += empty
    }
    return line
  }

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

  return `${progressFill}${progressEmpty}`
}

module.exports = {
  drawLine: drawLine
}
