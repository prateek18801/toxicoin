import Block from './block';
import Transaction from './transcation';

class Blockchain {
    private chain: Block[];
    private reward: number;
    private pendingTxn: Transaction[];

    constructor() {
        this.chain = [this.genesis()];
        this.reward = 1;
        this.pendingTxn = [];
    }

    latest(): Block { return this.chain[this.chain.length - 1]; }
    genesis(): Block { return new Block([new Transaction('0', '0', 0)], '0', 0); }

    minePendingTxn(minerWalletAddress: string) {
        this.chain.push(new Block(this.pendingTxn, this.latest().getHash(), Date.now()));
        this.pendingTxn = [new Transaction('toxicoin', minerWalletAddress, this.reward)];
    }

    createNewTxn(transcation: Transaction) {
        this.pendingTxn.push(transcation);
    }

    calculateBalanceForWallet(walletAddress: string) {
        let balance: number = 0;
        for (const block of this.chain) {
            for (const txn of block.getTransactions()) {
                if (txn.from === walletAddress) balance -= txn.amount;
                if (txn.to === walletAddress) balance += txn.amount;
            }
        }
        return balance;
    }

};

export default Blockchain;
