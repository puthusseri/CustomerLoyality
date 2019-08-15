pragma solidity ^0.5.0;

contract Marketplace {
  string public name;
  mapping(uint => Product) public products;
  uint public productCount  = 0;//limitation of evm is that it cant find how many counts are there. so use a countercash

  struct Product {
    uint id;
    string name;
    uint price;
    address owner;
    bool purchased;
  }
  event ProductCreated(
    uint id,
    string name,
    uint price,
    address owner,
    bool purchased
  );
  constructor () public {
    name = "Vyshak Puthusseri";
  }

  function createProduct(string memory _name, uint _price) public {

    //Require a name
    require(bytes(_name).length > 0);
    require(_price > 0);



    //Make sure parameters are correct
    //increment product count
    productCount++;
    //create the product
    products[productCount] = Product(productCount, _name, _price, msg.sender, false);
    //Create the event
    emit ProductCreated(productCount, _name, _price, msg.sender, false);
  }

}
