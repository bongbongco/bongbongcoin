const CryptoJS = require("crypto-js");

class Block {
    constructor(index, hash, previousHash, timestamp, data){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
    }
}

const genesisBlock = new Block(
    0,
    "4E985F1BD287F25378AD12004377F45A5569C6B0B6A54A5CE9B19A8F26C6CE24",
    null,
    1522277302050,
    "This is the genesis!!"
)

let blockchain = [genesisBlock];

const getLastBlock = () => blockchain[blockchain.length - 1];

const getTimestamp = () => new Date().getTime() / 1000;

const createHash = (index, previousHash, timestamp, data) => {
    CryptoJS.SHA256(index + previoushHash + timestamp + data).toString();
}

const createNewBlock = data => {
    const previousBlock = getLastBlock();
    const newBlockIndex = previousBlock.index + 1;
    const newTimestamp = getTimestamp();
    const newHash = createHash(
        newBlockIndex, 
        previousBlock.hash, 
        newTimestamp, 
        data
    );
    const newBlock = new Block(
        newBlockIndex,
        newHash,
        previousBlock.hash,
        newTimestamp,
        data
    )
    return newBlock;
};

