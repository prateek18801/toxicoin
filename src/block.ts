import Transaction from './transcation';
import { SHA256 } from './utils';

const _dif: number = 4;

class Block {
    private transactions: Transaction[];
    private prev: string;
    private hash: string;
    private nonce: number;
    private timestamp: number;

    constructor(transactions: Transaction[], prev: string, timestamp: number) {
        this.transactions = transactions;
        this.hash = '';
        this.prev = prev;
        this.nonce = 0;
        this.timestamp = timestamp;
        this.mine();
    }

    getHash(): string { return this.hash; }
    getPrev(): string { return this.prev; }
    getTransactions(): Transaction[] { return this.transactions; }

    genHash(): string {
        return SHA256(JSON.stringify({ transactions: this.transactions, nonce: this.nonce, prev: this.prev, timestamp: this.timestamp }))
    }

    mine(): void {
        while (this.hash.substring(0, _dif) !== Array(_dif + 1).join('0')) {
            this.nonce++;
            this.hash = this.genHash();
        }
    }
};

export default Block;
