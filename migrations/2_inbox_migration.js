const inbox = artifacts.require("Inbox");

module.exports = function (deployer) {
  deployer.deploy(inbox);
};
