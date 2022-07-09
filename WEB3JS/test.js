const Web3=require('web3')
const web3= new Web3('https://rinkeby.infura.io/v3/c74de4195a444c4488f1403aef60d81f')
// web3.eth.getBlockNumber(function (error, result) {
//     console.log(result);
// });
// web3.eth.getBlock('latest').then((block)=>{
//     console.log({
//         blocknum:block.number,
//         blockhash:block.hash
//     });
// })
// web3.eth.getBlockNumber().then((latest)=>{
//     for (let i = 0; i < 10; i++) {
//         web3.eth.getBlock(latest-i).then((num)=>{
//             console.log(num.timestamp);
//         })
        
//     }
// })
const account1=(process.env.metamask_account_1)
console.log(account1);
// addr='0xF64c285732b33C06645899df183B83339B258BEe'
// web3.eth.getBalance(addr,(err,bal)=>{
//     console.log(bal);
// })
/*const account1=(process.env.metamask_account_1)
const account2=(process.env.metamask_account_2) 
const privateKey_acc1=Buffer.from(process.env.private_key_1,'hex')
web3.eth.getBalance(account1,(err,res)=>{
    console.log(web3.utils.fromWei(res));
})

web3.eth.getTransactionCount(account1,(err,txCount)=>{
    const data= '0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561005057600080fd5b50610276806100606000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80636cc003b91461003b5780638c878f3814610059575b600080fd5b610043610077565b604051610050919061014c565b60405180910390f35b61006161010f565b60405161006e91906101a8565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610108576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100ff90610220565b60405180910390fd5b6002905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000819050919050565b61014681610133565b82525050565b6000602082019050610161600083018461013d565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061019282610167565b9050919050565b6101a281610187565b82525050565b60006020820190506101bd6000830184610199565b92915050565b600082825260208201905092915050565b7f6268616b206273646b0000000000000000000000000000000000000000000000600082015250565b600061020a6009836101c3565b9150610215826101d4565b602082019050919050565b60006020820190508181036000830152610239816101fd565b905091905056fea26469706673582212209e2fdfe568db9f018ab681bab7d7784bdf7af63caf6723a49f11da98901c9e2364736f6c634300080e0033'
    // build the transction
    const obej={
        nonce:web3.utils.toHex(txCount),
        gasLimit:web3.utils.toHex(500001),
        gasPrice:web3.utils.toHex(500000),
        data:data
        // to:account2,
        // value:web3.utils.toHex(web3.utils.toWei('0.9','ether'))
    }
    // sign 
    const tx= new Tx(obej , { chain: 'rinkeby' })
    tx.sign(privateKey_acc1)
    const serialtrans=tx.serialize()
    const raw='0x'+serialtrans.toString('hex')
    // broadcast transaction
    web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
        console.log('hash',txHash,'err',err);
    })
})
*/