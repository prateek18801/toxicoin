import Blockchain from './blockchain';
import Transaction from './transcation';

const toxichain = new Blockchain();
toxichain.createNewTxn(new Transaction('user_1', 'user_2', 100));
toxichain.createNewTxn(new Transaction('user_2', 'user_1', 50));
toxichain.minePendingTxn('miner_1');
toxichain.createNewTxn(new Transaction('user_2', 'user_1', 25));
toxichain.minePendingTxn('miner_1');

console.log(JSON.stringify(toxichain));
console.log(toxichain);

console.log(toxichain.calculateBalanceForWallet('user_1'));
console.log(toxichain.calculateBalanceForWallet('user_2'));
console.log(toxichain.calculateBalanceForWallet('miner_1'));
