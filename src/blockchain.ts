import Block from './block';

class Blockchain {
    private chain: Block[];

    constructor() {
        this.chain = [this.genesis()];
    }

    genesis(): Block {
        return new Block('0', '0', Date.now());
    }

    latest(): Block {
        return this.chain[this.chain.length - 1];
    }

    addBlock(data: string): void {
        this.chain.push(new Block(data, this.latest().getHash(), Date.now()));
    }
};

export default Blockchain;
