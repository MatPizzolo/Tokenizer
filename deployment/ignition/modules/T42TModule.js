const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("T42TModule", (m) => {
  const token = m.contract("T42T");

  return { token };
});
