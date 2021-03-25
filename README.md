# React Bingo

- A completed row, column or a diagonal ensures a single win
- The middle slot is always chosen
- Multiple bingos are possible
- Can be played in a browser or a mobile device
- Confetti for each bingo win
- Extra: Each individual win gives the player a letter from the word 'BINGO' and when there are five wins, the player gets a trophy. 

## To install dependencies

### `yarn install`

## To run the app

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To run Cypress

The app needs to be running on localhost for Cypress to work.

To launch the Cypress automated testing tool:

### `yarn run cypress open`

Test file is in the cypress -> integration folder: bingo_spec.js

Cypress will open in the Chrome Browser

<img width="1312" alt="cypress" src="https://user-images.githubusercontent.com/20908353/112538102-ce9b2780-8daf-11eb-8a74-4e86eb8285bb.png">

## Deployment

The app is deployed in Vercel.

https://react-bingo.vercel.app

## Version

React v17.0.2

react-dom-confetti v0.2.0

cypress v6.8.0

cypress-react-selector v2.3.6
