import Blockchain from "./blockchain";

const toxichain = new Blockchain();
console.log('mining 1');
toxichain.addBlock('block 1 data');
console.log('mining 2');
toxichain.addBlock('block 2 data');

console.log(toxichain);

