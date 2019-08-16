pragma solidity ^0.5.0;

contract Marketplace {
  string public name;
  mapping(uint => Product) public products;
  uint public productCount  = 0;//limitation of evm is that it cant find how many counts are there. so use a countercash

  struct Product {
    uint id;
    string name;
    uint price;
    address payable owner;
    bool purchased;
  }
  event ProductCreated(
    uint id,
    string name,
    uint price,
    address payable owner,
    bool purchased
  );
    event ProductPurchased(
    uint id,
    string name,
    uint price,
    address payable owner,
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
  function purchaseProduct(uint _id) public payable {
    //Fetch the product
    Product memory _product = products[_id];
    //fetch the owner
    address payable _seller = _product.owner;
    //makesure the product id is valid
    require(_product.id > 0 && _product.id < productCount);
    //Check there are enough balance in the ether account
    require(msg.value >= _product.price);
    //required that product has not purchased early
    require(!_product.purchased);
    //require that the buyer is not the seller
    require(_seller != msg.sender);

    //Transfer the ownership
    _product.owner = msg.sender;

    //mark as purchased
    _product.purchased = true;
    //Update the product
    products[_id] = _product;
    //Pay the seller by sendig the ether
     address(_seller).transfer(msg.value);

    //trigger the event
    emit ProductPurchased(productCount, _product.name, _product.price, msg.sender, true);

  }
}