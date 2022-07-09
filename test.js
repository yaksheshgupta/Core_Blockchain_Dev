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
array=[] 
class mainBlockchain{
    constructor(){
        this.mainChain=[this.createGenesisBlock()]
        this.difficulty=4
    }
    createGenesisBlock(){
        return new Block(0,"01/07/2022","genesis block","0")
    }
    getBlockNum(){
        return this.mainChain.length
    }
    getLatestBlock(){
        return this.mainChain[this.mainChain.length -1]
    }
    add_Block(newBlock){ 
        this.mainChain.push(newBlock)
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

class paraChain1 extends mainBlockchain{
    constructor(){
        super()
        this.difficulty=4
    }
    createGenesisBlock(){
        return new Block(0,"01/07/2022","genesis block","0")
    }
    addBlock(newBlock){ 
        newBlock.previousHash=this.getLatestBlock().hash
        // newBlock.previousHash=mm.getLatestBlock().hash
        // newBlock.hash=newBlock.calculateHash()
        newBlock.mineBlock(this.difficulty)
        this.mainChain.push(newBlock);
        array.push(this.mainChain)
    }   
}
class paraChain2 extends mainBlockchain{
    constructor(){
        super()
        this.difficulty=4
    }
    createGenesisBlock(){
        return new Block(0,"01/07/2022","genesis block","0")
    }
    addBlock(newBlock){ 
        newBlock.previousHash=this.getLatestBlock().hash
        // newBlock.previousHash=mm.getLatestBlock().hash
        // newBlock.hash=newBlock.calculateHash()
        newBlock.mineBlock(this.difficulty)
        this.mainChain.push(newBlock);
        array.push(this.mainChain)
    }   
}
let chain1 = new paraChain1()
let chain2 = new paraChain2()

console.log("mining block 1---");
chain1.addBlock(new Block(1,"01/06/2022",{amount:2, to:'yakshesh'}))
console.log("mining block 2---");
chain1.addBlock(new Block(2,"03/06/2022",{amount:3, to:'gg'}))
console.log();
// console.log("mining block 3---");
// chain1.addBlock(new Block(3,"01/06/2022",{amount:2, to:'yakshesh'}))
// console.log("mining block 4---");
// chain1.addBlock(new Block(4,"03/06/2022",{amount:3, to:'gg'}))
// console.log("mining block 5---");
// chain1.addBlock(new Block(5,"01/06/2022",{amount:2, to:'yakshesh'}))
// console.log("mining block 6---");
// chain1.addBlock(new Block(6,"03/06/2022",{amount:3, to:'gg'}))
// console.log(chain1.getBlockNum()+'----- hello');


// console.log("mining block 1---");
// chain2.addBlock(new Block(1,"01/06/2022",{amount:2, to:'yakshesh'}))
// console.log("mining block 2---");
// chain2.addBlock(new Block(2,"03/06/2022",{amount:3, to:'gg'}))
// console.log("mining block 3---");
// chain2.addBlock(new Block(3,"01/06/2022",{amount:2, to:'yakshesh'}))
// console.log("mining block 4---");
// chain2.addBlock(new Block(4,"03/06/2022",{amount:3, to:'gg'}))
// console.log("mining block 5---");
// chain2.addBlock(new Block(5,"01/06/2022",{amount:2, to:'yakshesh'}))
// console.log("mining block 6---");
// chain2.addBlock(new Block(6,"03/06/2022",{amount:3, to:'gg'}))
// console.log(chain2.getBlockNum()+'----- hello');

// for (let i = 0; i < 2; i++) {
//     console.log(array[0][i]);
// }
/*introduce a protocal will use prev hash depending on the block mined irrespective 
of the para chain used*/