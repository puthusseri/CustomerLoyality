var Migrations = artifacts.require("./Discount.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
