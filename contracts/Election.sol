pragma solidity ^0.5.0;

contract Election {

   
    int public x;
   
    constructor () public {
  
        x=0;
        add();
    }

    function add() public
    {
        x=x+1;
      
    }

   
}
