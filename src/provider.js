const ethers = require("ethers");

const provider = ethers.getDefaultProvider("ropsten", {
  // Replace the following with your own INFURA API key
  infura: "key",
});

module.exports = provider;
