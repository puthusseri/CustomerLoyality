pragma solidity ^0.5.0;

contract Product {
  struct Items {
    uint id;
    string name;
  }
  //Stores the product count
  uint public productsCount;
  mapping( uint => Items ) public products;
  constructor() public {

      addProduct("Product 1");
      addProduct("Product 2");
      addProduct("Product 3");
      addProduct("Product 4");
      productsCount = 0;

  }
  function addProduct (string memory _name) private {
        productsCount ++;
        products[productsCount] = Items(productsCount, _name);
    }
  
}
