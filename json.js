// JavaScript Object Notation = JSON
const user = {name : 'robin', email : 'abc@gmail.com', phone : '0185585642', id : 5183};
// const stringiFied = JSON.stringify(user);
// console.log(stringiFied);

const shop = {
    name : 'Vintashe',
    address : 'Dhaka',
    category : ['Cloth', 'Accessories', 'Shoes'],
    isExpensive : true
}
const shoptStringiFied = JSON.stringify(shop);
console.log(shoptStringiFied);
const converted = JSON.parse(shoptStringiFied);
console.log(converted); 