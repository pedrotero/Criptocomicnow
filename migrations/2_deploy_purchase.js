const PurchaseContract = artifacts.require("purchaseContract.sol");

module.exports = function (deployer) {
  deployer.deploy(PurchaseContract);
};