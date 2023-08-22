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

}

// let test = new product(1,2)
// console.log(test.getName())