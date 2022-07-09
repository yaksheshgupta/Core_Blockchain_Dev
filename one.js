const SHA256= require('crypto-js/sha256')
class Block{
    constructor(index,timestamp,data,previousHash=''){
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.previousHash=previousHash;
        this.hash=this.calculateHash();
        this.nonce=0
    }
    calculateHash(){
        return SHA256(this.index+this.timestamp+ JSON.stringify(this.data)+this.nonce+ this.previousHash).toString()
    }
    mineBlock(difficulty){
        while(this.hash.substring(0,difficulty)!==Array(difficulty+1).join("0")){
            this.nonce++
            this.hash=this.calculateHash()
            // console.log(this.hash);
            // console.log(this.nonce);
        }
        // console.log("mined broo-----"+ this.hash);
    }
}
class BlockChain{
    constructor(){
        this.chain=[this.createGenesisBlock()]
        this.difficulty=6
    }
    createGenesisBlock(){
        return new Block(0,"01/07/2022","genesis block","0")
    }
    getLatestBlock(){
        return this.chain[this.chain.length -1]
    }
    addBlock(newBlock){ 
        newBlock.previousHash=this.getLatestBlock().hash
        // newBlock.hash=newBlock.calculateHash()
        newBlock.mineBlock(this.difficulty)
        this.chain.push(newBlock)
    }
    returnLastIndex(){
        const currentBlock=this.getLatestBlock()
        return currentBlock.index
    }
    checkChain(){
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock=this.chain[i]
            const prevBlock=this.chain[i-1]
            if (currentBlock.previousHash!==prevBlock.hash) {
                return false;
            }
            if (currentBlock.hash!==currentBlock.calculateHash()) {
                return false;
            }
        }
        return true
    }
}
// let myCoin = new BlockChain()
// console.log("mining block 1---");
// myCoin.addBlock(new Block(1,"01/06/2022",{amount:2, to:'yakshesh'}))
// console.log("mining block 2---");
// myCoin.addBlock(new Block(2,"03/06/2022",{amount:3, to:'gg'}))

