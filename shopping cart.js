// product constructor 
function  Product (name,price) {
    this.name = name,
    this.price = price

    this.getName = function(){
        return this.name 
    }

    this.getPrice = function(){
        return this.price 
    }


}

function ShoppingCart (){
    this.item = [1,2]

    this.getLength = function(){
        return this.item.length 
    }

    this.addItem = function (product){
        this.item.push(product)
    }

    this.removeItem


}

// let test = new product(1,2)
// console.log(test.getName())
let test = new ShoppingCart()
test.addItem('product')
console.log(test.getLength())