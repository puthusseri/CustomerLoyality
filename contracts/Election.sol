pragma solidity ^0.5.0;

contract Election {

    struct Product
    {
        int id;
        string name;
        int discount;
    }
    
    int public x;
    mapping(int => Product) public products;
    constructor () public {
  
        x=0;
        add();
    }

    function add() public
    {
        x=x+1;
        products[x]=Product(x,'Aashwin',0);
    }

    function addDiscount() public
    {
        
        products[1].discount=50;
    }
}
