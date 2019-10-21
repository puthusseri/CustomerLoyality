App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',
  hasVoted: false,

  init: function () {
    return App.initWeb3();
  },

  initWeb3: function () {
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

  initContract: function () {
    $.getJSON("Discount.json", function (discount) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.Discount = TruffleContract(discount);
      // Connect provider to interact with contract
      App.contracts.Discount.setProvider(App.web3Provider);

      return App.render();
    });
  },

  render: function () {
    var discountInstance;
    var productInstance;
    var retailerInstance;
    var couponInstance;

    // Load account data

    web3.eth.getCoinbase(function (err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });
  }, 
  voucher: function(){
    alert("90");
    App.contracts.deployed().then(function(i){
      alert("");
    })
  }
};

$(function () {
  $(window).load(function () {
    App.init();
  });
});
