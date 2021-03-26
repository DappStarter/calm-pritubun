require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot already cruise spike proof install immense army gaze'; 
let testAccounts = [
"0xb1ac4133a3e0d6e273d605912f58ac8d2cf40d73a4675879b0e461fa901ad343",
"0x147dd419aa226891c9614ccdef4ed03b29577558f5d10eaa169922feebcf5086",
"0x16a59ee7ad79aa9b5dbc6043e56127511d24e559f9dc6bc3a964f2c9526846f3",
"0xd0229bc4c9791a2e9f2646072ae38350ec204f68e4dc89aad3d6725e71b44ece",
"0xd781cdefa6d1d5cb0936a00074a3f2a7466d7b3e67cc945f13fd1b87a2784eee",
"0x2164feb518ae38ac517f715dbbfcf12d481362d81812a5993680ea7ed124cbbc",
"0x4c697167044c02fdbe856a9334bef4e13591b311b7f5a08d9ea440740545eb00",
"0x17bd9df6740f1aab35f773602681bb74c3064711f7e3a32dd1a7aa734f690ddd",
"0xba868d52850d82e3b864b99a2dff904860dbcdbef5b73d0210aca195352dd1d9",
"0xf443816b83c8d6e2ff392b39db199a1bd6f2d95a631bfab462ee1d0de435c267"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
