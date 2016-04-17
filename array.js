'use strict';

let _ = require('lodash')

var products = [
    {id: 1, name: 'Hyperproduct', type: 'software', amount: 100, price: 102.99},
    {id: 2, name: 'Superproduct', type: 'software', amount: 120, price: 120.99},
    {id: 3, name: 'Chair', type: 'furniture', amount: 220, price: 226.95},
    {id: 4, name: 'Hellgreaser T-Shirt', type: 'chothes', amount: 30, price: 23.99},
    {id: 5, name: 'Antivirus Super Duper', type: 'software', amount: 150, price: 49.99},
    {id: 6, name: 'Brown Table ', type: 'furniture', amount: 160, price: 421.99}
]

let furnitures = products.filter(p => p.type === 'furniture')
let productNames = furnitures.map(p => p.name)
let allFurnituresAmount = furnitures.reduce((sum, product) => sum + product.amount, 0)

console.log(furnitures);
console.log(productNames);
console.log(allFurnituresAmount);

let sumAmount = (sum, product) => sum + product.amount
let allFurnituresAmount2 = furnitures.reduce(sumAmount, 0)

console.log(allFurnituresAmount2);

// let isType = (type, product) => product.type === type
// let software = products.filter(product => isType('software', product))
// console.log(software);

let isType = _.curry((type, product) => product.type === type)
let software = products.filter(isType('software'))

console.log(software);
