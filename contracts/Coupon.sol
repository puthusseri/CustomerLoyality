pragma solidity ^0.4.8;

contract Coupon {



    struct Retailer
    {
        string name;
        string loc;
    }



    struct DiscCoupon
    {
        address retailerAddr;
        uint256 date;
        string product;
        uint price;
        uint disc;
        bool exist;
    }

    mapping(bytes32 => DiscCoupon) public coupon;
    mapping(bytes32 => bool) public couponCheck;
    mapping(address => Retailer) public retailer;
    mapping(address => bool) retailerExists;
    mapping(uint => bytes32) public hashCoupon;
    address public owner;
    uint public indexCount;
    // Bidding duration in minutes
    constructor() public {
        
        owner=msg.sender;


    }

    modifier onlyOwner()
    {
        require(owner==msg.sender);
        _;
    }
    
    modifier onlyRetailer()
    {
        require(retailerExists[msg.sender]);
        _;
    }
   

    function redeem(bytes32 x)
    {
        require(coupon[x].exist);
        coupon[x].exist=false;
    }
    
    function addRetailer(string memory x1,string memory x2) public returns (string memory)
    {
       retailer[msg.sender].name=x1;
       retailerExists[msg.sender]=true;
       retailer[msg.sender].loc=x2;
    }

    function getHash() view public returns (bytes32)
    {
        return(hashCoupon[indexCount]);
    }

    function retailerClick() public view returns (string memory)
    {
       if(retailerExists[msg.sender]==true)
       {
        return("http://localhost:3000/admin1.html");
        }
        else{
            return("http://localhost:3000/register.html");
        }

    }


// New rebilding contract







}
