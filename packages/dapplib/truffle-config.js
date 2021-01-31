require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile proud harvest clock bone velvet'; 
let testAccounts = [
"0xdd2abdc02dea1b8a172bcbf0cf9cc4d037ea80b68ca224036c16da2eeac70dbf",
"0x14bb33c9c572fd5db5f9199bbed05ddec02418d847514e95c2cf2e18632d778f",
"0xccff90b8292b6a0e1fae7e9699b51b0f82320b00cdd6dc6f8207fda2394dc690",
"0x13c9b1df56ea0a33b1b8104d5bb84e9e942a5660f0c6065c9494045a2f97b5eb",
"0x047680620f8026be27d8dd4c4bf4db6807d6589b5468a0a1ffa7b93927c84ee4",
"0xa1a82e902179ada60d1236c949478cb95a6721f7f0368b91e8a40c90fe1bdace",
"0x9c25fc8990a333f1ac422161353f852bf5b242a80720352093e9bdd614fa13d1",
"0x08f13254b7235b0c900fcd87c78912fecd156d4986fbb3567f9d6fb570bca780",
"0x44be5b425f35bc555ec2da24dd88c328fefe6fe95b535df9ddf36546630854c2",
"0x5de6df31ef832afc5f4e1ae58e361d04d7f3344423955911e0f19431272fcdcb"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
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
