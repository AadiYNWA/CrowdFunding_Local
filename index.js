const {Web3} = require('web3');

// Set up a connection to the Ganache network
const web3 = new Web3('http://localhost:7545');

// var Web3 = require('web3');

// // "Web3.givenProvider" will be set if in an Ethereum supported browser.
// var web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

// Log the current block number to the console
web3.eth
	.getBlockNumber()
	.then((result) => {
		console.log('Current block number: ' + result);
	})
	.catch((error) => {
		console.error(error);
	});