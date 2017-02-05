/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//SEARCH ARRAY BY parameter
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(what) {
    return function findCherriesByType(fruit) {
        return fruit.name === what;
    }
}

console.log(inventory.find(findCherries("cherries")));
// { name: 'cherries', quantity: 5 }