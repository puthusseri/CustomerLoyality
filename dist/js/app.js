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

    // Load contract data
    App.contracts.Contract.deployed().then(function(instance) {
      alert("");
      CouponInstance = instance;
      return CouponInstance.owner();
    }).then(function(owner){
      alert(owner);
    }).catch(function(error) {
      console.warn(error);
    });
  },

  ownerOrRetailer:function() {
    var CouponInstace;
    App.contracts.Coupon.deployed().then(function(instance){
      CouponInstace=instance;
      return CouponInstace.retailerOrOwner();
    }).then(function(x){
      window.location.href = x;
    })
  }
};

$(function() {
  alert("");
  $(window).load(function() {
    App.init();
  });
});
