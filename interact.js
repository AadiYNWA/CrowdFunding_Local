const {Web3} = require('web3');
const path = require('path');
const fs = require('fs');

// Set up a connection to the Ethereum network
const web3 = new Web3('http://localhost:7545');

// Read the contract address from the file system
const deployedAddressPath = path.join(__dirname, 'MyContractAddress.bin');
const deployedAddress = fs.readFileSync(deployedAddressPath, 'utf8');

// Read the bytecode from the file system
const bytecodePath = path.join(__dirname, 'MyContractBytecode.bin');
const bytecode = fs.readFileSync(bytecodePath, 'utf8');

// Create a new contract object using the ABI and bytecode
const abi = require('./MyContractAbi.json');
const myContract = new web3.eth.Contract(abi, deployedAddress);
myContract.handleRevert = true;

async function interact() {
	const providersAccounts = await web3.eth.getAccounts();
	const defaultAccount = providersAccounts[0];

	try {

		// Create Campaign
		const campaign_id = await myContract.methods.createCampaign(
			'0x5A42B5e67976437D0375EF67421e31247428f8E1',
			'First Campaign',
			'Just a sample Campaign',
			'5',
			1713312000000,
			'ABC'
		)
		console.log('New Campaign Id: ' + campaign_id);
	} catch (error) {
		console.error(error);
	}
}

interact();