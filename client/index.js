require("dotenv").config();
const Contract = require('web3-eth-contract');
const fs = require('fs');

const rpcUrl = process.env.RPC_URL;
const address = process.env.CONTRACT_ADDRESS;

// Получаем ABI
const jsonInterface = JSON.parse(fs.readFileSync('../artifacts/contracts/VovaToken.sol/VovaToken.json', 'utf8')).abi;

Contract.setProvider(rpcUrl);
contract = new Contract(jsonInterface, address);

// Вызываем методы
// Однако данные методы не работают, потому что infura не поддерживает eth_sendTransaction, которая используется при вызове
// через send. Через call ничего не работает потому что функции смарт контракта меняют его состояние.
// Я пытался разобраться как это починить, но у меня не получилось.
contract.methods.addToStudent("Grigoriy", 28, true).send({from: "0x28845B246b8A4d42b848fD419D3c5B88868748F4"}).then(console.log).catch(console.error);
contract.methods.addToStudent("Sasha", 32, false).send({from: "0x28845B246b8A4d42b848fD419D3c5B88868748F4"}).then(console.log).catch(console.error);
contract.methods.delFromStudent("Sasha").send({from: "0x28845B246b8A4d42b848fD419D3c5B88868748F4"}).then(console.log).catch(console.error);

// Получаем ивенты
contract.getPastEvents('allEvents').then(console.log).catch(console.error);