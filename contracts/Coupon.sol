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




// New rebilding contract







}
