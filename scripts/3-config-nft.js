import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const bundleDrop = sdk.getBundleDropModule(
  '0x3D5f29C5a0ac6EC53E96E3A85259300FFd931C09'
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: 'Leaf',
        description: 'This NFT will give you access to FarmerDAO!',
        image: readFileSync('scripts/assets/dao-leaf.jpg'),
      },
    ]);
    console.log('✅ Successfully created a new NFT in the drop!');
  } catch (error) {
    console.error('failed to create the new NFT', error);
  }
})();
