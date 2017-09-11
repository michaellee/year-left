# @year_left

This is the source code for a little Twitter bot called [@year_left][twitter]. @year_left is a simple bot that calculates the time left in the current year and tweets out a little graphical tweet. It is written in JavaScript and Node.js and gets run daily on a cron job on a Digital Ocean droplet.

## Getting it to run

To get [@year_left][twitter] running on your machine, you'll need Node.js, [Yarn](https://yarnpkg.com) and keys and tokens from a [Twitter developer's account](https://dev.twitter.com).

### Environment variables

Twitter keys and tokens should be defined in a file called `env.js`. By default that file is ignored in the `.gitignore` file so that it isn't exposed in a public git repo. A sample of what variables are required can be found in `env-sample.js`.

The reason why I used `env.js` instead of a `.env` file is because I couldn't get the cron job to run successfully because the `.env` file couldn't be read.

### Executing the code

Once the variables are set, you can run the code by running `node index.js`. **Warning:** running this will actually tweet out to whatever account you've set variables for. If you want to run the code for test purposes there's also a file called `test.js` which has the entire code minus the parts that actually tweets the calculation. This can be run using `node test.js`, this will log out the contents of the tweet onto your command-line.

## License

[MIT](https://github.com/michaellee/year-left/blob/master/LICENSE) © [Michael Lee](https://michaelsoolee.com/about)

[twitter]: https://twitter.com/year_left
