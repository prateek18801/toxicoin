class Transaction {
    to: string;
    from: string;
    amount: number;
    timestamp: number;

    constructor(from: string, to: string, amount: number) {
        this.to = to;
        this.from = from;
        this.amount = amount;
        this.timestamp = Date.now()
    }
};

export default Transaction;
