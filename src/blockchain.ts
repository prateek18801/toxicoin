import Block from './block';

class Blockchain {
    private chain: Block[];

    constructor() {
        this.chain = [this.genesis()];
    }

    latest(): Block { return this.chain[this.chain.length - 1]; }
    genesis(): Block { return new Block('0', '0', 0); }

    addBlock(data: string): void {
        this.chain.push(new Block(data, this.latest().getHash(), Date.now()));
    }
};

export default Blockchain;
