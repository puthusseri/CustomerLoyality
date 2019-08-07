App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',

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
    $.getJSON("Product.json", function(product) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.Product = TruffleContract(product);
      // Connect provider to interact with contract
      App.contracts.Product.setProvider(App.web3Provider);

      return App.render();
    });
  },

  render: function() {
    var productInstance;
    var loader = $("#loader");
    var content = $("#content");

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    // Load contract data
    App.contracts.Product.deployed().then(function(instance) {
      productInstance = instance;
      return productInstance.productsCount();
    }).then(function(productsCount) {
      var productsResults = $("#candidatesResults");
      productsResults.empty();

      for (var i = 1; i <= productsCount; i++) {
        productInstance.candidates(i).then(function(candidate) {
          var id = candidate[0];
          var name = candidate[1];
          

          // Render candidate Result
          var candidateTemplate = "<tr><th>" + id + "</th><td>" + name + "</td></tr>"
          productsResults.append(candidateTemplate);
        });
      }

      loader.hide();
      content.show();
    }).catch(function(error) {
      console.warn(error);
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
