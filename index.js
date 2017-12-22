const ENV = require('./env')
const timeUtility = require('./time')
const graphicUtility = require('./graphic')

let Twitter = require('twitter')

let client = new Twitter({
  consumer_key:         ENV.CONSUMER_KEY,
  consumer_secret:      ENV.CONSUMER_SECRET,
  access_token_key:     ENV.ACCESS_TOKEN,
  access_token_secret:  ENV.ACCESS_SECRET
})

let year = 365
let currentYear = new Date().getFullYear()

if (timeUtility.isLeapYear(currentYear)) {
  year = 366
}

let now = new Date()
let start = new Date(now.getFullYear(), 0, 0)

let diff = now - start
let oneDay = 1000 * 60 * 60 * 24
let day = Math.floor(diff / oneDay)

let timeLeft  = timeUtility.calculateTimeLeft(day, year)
let yesterday = timeUtility.calculateTimeLeftYesterday(day, year)

let override = process.argv[2] || false

let tweet = `${graphicUtility.drawLine(timeLeft)} ${timeLeft}%\n[${day}/${year}]`

if (day === 1) {
  const newYear = `🤖 Happy new year, human! Hope you have an awesome year! 🎉\n`
  tweet = newYear + tweet
}

let timeRan = new Date()
console.log('####Start####')
console.log(timeRan)

if (timeLeft < yesterday || day === 1 || override) {
  client.post('statuses/update', { status: tweet }, (error) => {
    if (error) {
      console.log('!!!!!!!!')
      console.log(tweet)
      console.log('--------')
      console.log(error)
      console.log('#### End ####')
    } else {
      console.log('Successful run with tweet!')
      console.log(tweet)
      console.log('#### End ####')
    }
  })
} else {
  console.log('#### End ####')
}
