pragma solidity ^0.5.0;

contract Discount {

  struct Product
  {
    int id;
    string name;
    int price;
  }
  
  struct Retailer
  {
    int id;
    string name;
    string retailerAddr;
  }

  struct DiscountCoupon
  {
    int id;
    int prdId;
    int retailerId;
    int discount;
    string date;
    bytes32 code;
  }

  mapping (int=>Product) public product;
  mapping (int=>Retailer) public retailer;
  mapping (int=>DiscountCoupon) public couponCode;

  int public couponCount;
  int public productCount;
  int public retailerCount;

  constructor() public {
    couponCount=0;
    addProduct(1,'Product - 1',10);
    addProduct(2,'Product - 2',20);
    addProduct(3,'Product - 3',30);
    addRetailer(1,'Retailer - 1','0x0');
    addRetailer(2,'Retailer - 2','0x1');
    addRetailer(3,'Retailer - 3','0x2');
    addRetailer(4,'Retailer - 4','0x13f2F0352aa35cDFCb6C2DEeB3017319b8724099');
    addRetailer(5,'Retailer - 5','0x88306b9d51A8adeb2d392960cCfc296AF6eB9627');
    addRetailer(6,'Retailer - 6','0x5');
    addCoupon(1,1,1,10,'2019-02-03','');
    addCoupon(2,1,2,20,'2019-02-03','');
    addCoupon(3,1,2,50,'2019-02-03','');
    addCoupon(4,2,1,30,'2019-02-03','');
    addCoupon(5,3,2,40,'2019-02-03','');
    
  }

  function addProduct(int x,string memory y,int z) public {
    productCount=productCount+1;
    product[productCount] = Product(x,y,z);
  }

  function addRetailer(int x,string memory y,string memory p) public {
    retailerCount=retailerCount+1;
    retailer[couponCount] = Retailer(x,y,p);
  }

  function addCoupon(int x,int y,int z,int q,string memory p,bytes32 r) public {
    couponCount=couponCount+1;
    couponCode[couponCount] = DiscountCoupon(x,y,z,q,p,r);
  }

  function updateCoupon(int x,int y,int z,int q,string memory p,bytes32 r) public {
    couponCount=couponCount+1;
    couponCode[couponCount] = DiscountCoupon(couponCount,y,z,q,p,r);
    couponCode[couponCount].code=sha256(abi.encodePacked(couponCount,y,z,q,p));
  }


}
