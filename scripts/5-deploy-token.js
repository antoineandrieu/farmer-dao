import sdk from './1-initialize-sdk.js';

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule('0x345EFBE5ea007Ee37628cA749E88d0a09A101379');

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: 'FarmerDAO Governance Token',
      // What's your token's symbol? Ex. "ETH"
      symbol: 'LEAF',
    });
    console.log(
      '✅ Successfully deployed token module, address:',
      tokenModule.address
    );
  } catch (error) {
    console.error('failed to deploy token module', error);
  }
})();
