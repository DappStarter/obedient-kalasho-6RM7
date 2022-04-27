require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remember history hockey argue sure tenant'; 
let testAccounts = [
"0xa403e92d71298ea5340f0a8d3d3cade1ce97f18e34420d7a1b79dc50f09a3533",
"0x1b4d3cdc4d12e8e919603eb24aea1d250fe922459c73cf88135f73d45d36edbf",
"0xd8b7b8617261e2b63e6b2e0229aabec9f708024a9e5e5cb40a148974d0bedde4",
"0xcc1951b8b9ddf068f64af219969381393534c4ee6f219d841ad4111948d6c6e0",
"0x9ae571144166b506cafe2fd13d2536ea5917008f7e3e95b7df76e1dd40dc4f7f",
"0xf2f81b17196e5641e3050325396eb89dfc3715c89b4aafbc2582f413cf82f8be",
"0x574264944d32f35a482df2d56f5f5820599625f6f54ff7e806f9e6c3c1cf74c5",
"0x2273ce20b505df0818dc1f7f7c0cc99b46506bc3b5165586d62491dd5ec44469",
"0xe3339604b19c68c31a66deb9ebab9cfe0aa988070e6155db256af4cbac45381c",
"0x54bb30c7c6b2ca1dc9f7044816a142ac85ab5b777da5e0a170f67716f9e06a8c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

