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


    App.contracts.Discount.deployed().then(function (instance) {
      discountInstance = instance;
      return discountInstance.productCount();
    }).then(function (size) {



      alert(size);
      //============================================================================================================================================================================================
      //2
      //============================================================================================================================================================================================

      discountInstance.retailerCount().then(function (size1) {

        alert(size1);
        //============================================================================================================================================================================================
        //3
        //============================================================================================================================================================================================
        discountInstance.couponCount().then(function (size2) {

          for (i = 1; i <= size; i++) {
            discountInstance.product(i).then(function (val1) {

              var id = val1[0];
              var name = val1[1];
              var price = val1[2];
              opt = "<option value='" + id + "' >" + name + "</ option>"
              $('#productList').append(opt);
              alert(id + name + price);
            })
          }


          alert(size + size1 + size2);
        })
        //============================================================================================================================================================================================
        //3
        //============================================================================================================================================================================================
      });
      //============================================================================================================================================================================================
      //2
      //============================================================================================================================================================================================

    }).catch(function (error) {
      console.warn(error);
    });

  },




  updateDiscount: function () {
    var discountUpdate = $('#discountUpdate').val();
    var validityUpdate = $('#validityUpdate').val();
    var selectedItem = $('#productList').val();
    App.contracts.Discount.deployed().then(function (instance) {
      discountInstance = instance;
      return instance.couponCount();
    }).then(function (i) {
      return discountInstance.updateCoupon(i, selectedItem, 1, discountUpdate, validityUpdate,'');
    }).then(function(){
      discountInstance.couponCount().then(function(count2){
        discountInstance.couponCode(count2).then(function(val3){
          alert(val3[5]);
          $('#hashCode').html(""+val3[5]);
          $('#qr').val(""+val3[5]);
        })
      })
    })
  },


  productDropChange: function () {

    var selectedItem = $('#productList').val();

    App.contracts.Discount.deployed().then(function (instance) {
      discountInstance = instance;
      return instance.product(selectedItem);
    }).then(function (coup) {

      discountInstance.couponCount().then(function (count) {
        for (i = count - 3; i <= count; i++) {
          discountInstance.couponCode(i).then(function (val1) {
            alert(selectedItem);
            if (val1[1] == selectedItem) {
              discountInstance.product(selectedItem).then(function (val2) {
                alert("=>" + val1[0] + " " + val1[1] + " " + val1[2] + " " + val1[3] + " " + val1[4]);
                $('#product_Name').html(val2[1] + "");
                $('#discountCircle').html(val1[3] + "");
                $('#validitySpecified').html("" + val1[4]);
                $('#discountUpdate').val("");
                $('#validityUpdate').val("");
                $('#QRCode').html("");
                $('#hashCode').html("");
              })
            }
          });
        }

      }).catch(function (err) {
        console.error(err);
      });
    })
  }
};

$(function () {
  $(window).load(function () {
    App.init();
  });
});
