import { SHA256 } from './utils';

type blockdata = string;

class Block {
    private data: blockdata;
    private prev: string;
    private hash: string;
    private timestamp: number;

    constructor(data: blockdata, prev: string, timestamp: number) {
        this.data = data;
        this.hash = '';
        this.prev = prev;
        this.timestamp = timestamp;
        this.mine();
    }

    getHash(): string { return this.hash; }

    mine(): void {
        this.hash = SHA256(JSON.stringify({ data: this.data, prev: this.prev, timestamp: this.timestamp }));
    }
};

export default Block;
