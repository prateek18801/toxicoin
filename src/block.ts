import { SHA256 } from './utils';

type blockdata = string;
const _dif: number = 4;

class Block {
    private data: blockdata;
    private prev: string;
    private hash: string;
    private nonce: number;
    private timestamp: number;

    constructor(data: blockdata, prev: string, timestamp: number) {
        this.data = data;
        this.hash = '';
        this.prev = prev;
        this.nonce = 0;
        this.timestamp = timestamp;
        this.mine();
    }

    getHash(): string { return this.hash; }

    mine(): void {
        while (this.hash.substring(0, _dif) !== Array(_dif + 1).join('0')) {
            this.nonce++;
            this.hash = SHA256(JSON.stringify({ data: this.data, nonce: this.nonce, prev: this.prev, timestamp: this.timestamp }));
        }
    }
};

export default Block;
