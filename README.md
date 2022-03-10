# PlanetUI for EmberJS

This README details my initial experiments using EmberJS. I've chosen to re-write my [PlanetUI demo project](https://github.com/sausagejohnson/PlanetUI) using EmberJS and note the differences between the two which will be the subject of an article to follow in a few days at: http://blog.waynejohnson.net.

The PlanetUI demo project (React version) was covered in the following article: http://blog.waynejohnson.net/reactjs_and_friends

![PlanetUI in EmberJS](/screenshot.png)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (nvm recommended and tested with Node version 14.17.0)
* Ember CLI (npm install -g ember)
* Yarn (optional - use npm otherwise) (npm install -g yarn)

## Installation

* `git clone https://github.com/sausagejohnson/PlanetUIEmberJS` 
* `cd planetui`
* `yarn install` (or npm install)

## Running / Development

* `yarn start` (which is `ember serve`)
* Visit the app at [http://localhost:4200](http://localhost:4200).
* Visit the tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [PlanetUI demo project](https://github.com/sausagejohnson/PlanetUI)
* [ReactJS and Friends](http://blog.waynejohnson.net/reactjs_and_friends)
* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
