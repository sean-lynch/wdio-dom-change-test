Example to repro https://github.com/webdriverio/webdriverio/issues/1396

## Setup

- Install node dependencies `$ npm install`

## Running the test:

First start the server. It will serve the simple example at http://localhost:5000

    `$ npm start`

Then, in a separate terminal, run the test

    `$ npm run test-selenium`


## Running selenium separate from wdio

It's helpful to see the actual logs from selenium in this case. wdio will start its own instance but
will defer to another running instance if it exists (with a cryptic hook error)

First, install selenium standalone:

    `$ npm run install-selenium`

Then, run it:

    `$ npm run start-selenium`
