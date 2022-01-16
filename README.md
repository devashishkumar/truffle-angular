## steps to create new truffle application

### first step is to install truffle globally

npm install -g truffle

### create app using truffle command

truffle init

### now create package json file

npm init

### create contracts in contracts directory

### write migrations for new created contract

### compile contracts

truffle compile

### migrate smart contracts to local Ganache

`
Open Ganache server in local machine and update truffle-config.js ganache server configurations before executing the command
`

truffle migrate

### changing any existing contract and migrate it to Ganache

truffle migrate --reset


### for other npm dependencies


### download dependencies

npm install truffle truffle-contract web3 chai chai-as-promised chai-bignumber lite-server truffle-contract bootstrap nodemon

### download truffle dependencies

npm install


### configure angular app in truffle

truffle unbox Quintor/angular-truffle-box


npm install --no-optional