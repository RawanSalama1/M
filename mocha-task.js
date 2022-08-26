const shop = ["Orange","Banana","Apple","Strawberry"]
const fruit = ["Orange","Banana","Apple","Strawberry"]
//console.log(shop); 
var assert = require('assert');
//isArraySorted(shop);


describe("fruite shop tests",function(){
    it('cart contains 4 items',function(){
let length = shop.length;
assert.equal(length,4);
    })
    it('Second item is Banana',function(){
       // shop.indexOf("Banana",2)
        assert.equal(shop.indexOf("Banana",1),1)
    })
it('Items are sorted alphabtically',function(){
assert.notDeepEqual(shop,fruit.sort())


})
it('5 items after adding Mango',function(){
    shop.push("Mango");
    let length = shop.length
    assert.equal(length,5);
})
})

function isArraySorted(shop) {

    for (let i = 0; i < shop.length; i++) {
        
      if (shop[i + 1] > shop[i]) {
        
        continue;
      } else if (shop[i + 1] < shop[i]) {
        console.log("Not sorted")
        return false;
      }
    }
    console.log("sorted")
    return true;
  }