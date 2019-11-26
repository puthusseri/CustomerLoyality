App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',
  hasVoted: false,

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // TODO: refactor conditional
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("Coupon.json", function(coupon) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.Coupon = TruffleContract(coupon);
      // Connect provider to interact with contract
      App.contracts.Coupon.setProvider(App.web3Provider);
      return App.render();
    });
  },


  render: function() {
    var CouponInstance;

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });


    urlVal = window.location.href;

    if (urlVal == "http://localhost:3000/openCoupon.html") {

      App.contracts.Coupon.deployed().then(function(instance) {
        alert("");
        CouponInstance = instance;
        return CouponInstance.indexCount();
      }).then(function(index){
        var i;
        for(i=1;i<=index;i++)
        {
          CouponInstance.hashCoupon(i).then(function(x){
            CouponInstance.coupon(x).then(function(val){
            $('#purchaseCoupon').append('<div id="saleCoupon" onclick="App.couponSale()" class="col-xl-3 col-md-6 mb-4"><div class="card border-left-info shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-primary text-uppercase mb-1">'+val[2]+' -  र'+val[3]+'</div><div class="h5 mb-0 font-weight-bold text-gray-800">'+val[4]+'%</div></div><div class="col-auto"><i class="fab fa-ethereum fa-2x text-gray-300"></i></div></div></div></div></div>');
            });
          })
        }
      }).catch(function(error) {
        console.warn(error);
      });
    }


    // Load contract data

  },

  

  couponSale:function() {
    alert();
    var CouponInstace;
    App.contracts.Coupon.deployed().then(function(instance){
      CouponInstace=instance;
      return CouponInstace.fun3("sed");
    }).then(function(x){
      alert(x);
      window.location.href = x;
    })
  },

  ownerOrRetailer:function() {
    var CouponInstace;
    App.contracts.Coupon.deployed().then(function(instance){
      CouponInstace=instance;
      return CouponInstace.fun3("sed");
    }).then(function(x){
      alert(x);
      window.location.href = x;
    })
  },

  retailerCheck:function() {
    alert("");
    var CouponInstace;
    App.contracts.Coupon.deployed().then(function(instance){
      CouponInstace=instance;
      return CouponInstace.retailerClick();
    }).then(function(x){
      alert(x);
      window.location.href = x;
    })
  },
  
  reedem:function() {
    var CouponInstace;
    alert("");
    valQR = $('#listScan li:first-child').html();
    alert(valQR);
    var CouponInstace;
    App.contracts.Coupon.deployed().then(function(instance){
      CouponInstace=instance;
      return CouponInstace.redeem(valQR);
    }).then(function(x){
      alert("1");
      return CouponInstace.coupon(valQR);
    }).then(function(val){
      alert(val[4]);
      $('#actualPrice1').html("र"+val[3]);
      $('#product_Name1').html(val[2]);
      $('#discountCircle1').html(val[4]+"%");
    })
  },

  addProduct:function() {
    x1=$('#prodName').val();
    x2=$('#prodPrice').val();
    x3=$('#prodDisc').val();
    alert("");
    var CouponInstace;
    App.contracts.Coupon.deployed().then(function(instance){
      alert("");
      CouponInstace=instance;
      return CouponInstace.addCoupon(x1,x2,x3);
    }).then(function(x){
      return CouponInstace.getHash();
    }).then(function(x){
      $('#qr').val(x);
      $('#hashCode').html(x);
    }).then(function(){
      generate();
    })
  },

  toRetailer:function() {
    var CouponInstace;
    web3.eth.getAccounts(function(error, result) {
      addr1=web3.eth.accounts[0];
      web3.eth.sendTransaction(
          {from:web3.eth.accounts[0],
          to:"0xF85C27E59bADE0FfBC74dDB1d5FB4035a6F5C3c0",
          value:  "5000000000000000000", 
          data: "0xdf",
          gas: 21300
              }, function(err, transactionHash) {
        if (!err)
          {
            App.contracts.Coupon.deployed().then(function(instance){
              CouponInstace=instance;
              alert("");
              x1=$('#locOfRetailer').val();
              x2=$('#addrOfRetailer').val();
              x3=$('#exampleLastName').val();
              x4=$('#exampleFirstName').val();

              return CouponInstace.addRetailer(x4+x3,x1);


            }).then(function(){
              alert("");
            })
          }
      });
  });
  }
};

$(function() {
  alert("");
  $(window).load(function() {
    App.init();
  });
});
