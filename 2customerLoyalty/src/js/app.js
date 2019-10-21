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
    // if (typeof web3 !== 'undefined') {
    //   // If a web3 instance is already provided by Meta Mask.
    //   App.web3Provider = web3.currentProvider;
    //   web3 = new Web3(web3.currentProvider);
    // } else 
    {
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
      alert(account);
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);

       // alert(account);
        App.contracts.Discount.deployed().then(function (instance) {
          discountInstance = instance;
          //alert("");
          return discountInstance.retailerCount();
        }).then(function (size) {

          for(i=1;i<=size;i++)
          {
            discountInstance.retailer(i).then(function(rtl){
              //alert("-->>>"+rtl[1]);
            })

          }
        })

      }
    });




    urlVal = window.location.href;

    if (urlVal == "http://localhost:3000/admin.html") {
      App.contracts.Discount.deployed().then(function (instance) {
        discountInstance = instance;
        return discountInstance.productCount();
      }).then(function (size) {



        for (i = 1; i <= size; i++) {
          discountInstance.product(i).then(function (prd) {
            name = prd[1];
            price = prd[2];
            li = "<tr><td style='padding:10px;font-size: 20px;width:60%'>" + name + "</td><td style='width: 100px;padding:10px;'>" + price + "</td></tr>";
            $('#listPrd').html($('#listPrd').html() + li);
          })
        }



      })
    }

    App.contracts.Discount.deployed().then(function (instance) {
      discountInstance = instance;
      return discountInstance.productCount();
    }).then(function (size) {



      // alert(size);
      //============================================================================================================================================================================================
      //2
      //============================================================================================================================================================================================

      discountInstance.retailerCount().then(function (size1) {

        // alert(size1);
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
              //  alert(id + name + price);
            })
          }


          // alert(size + size1 + size2);
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
      alert(i);
      return discountInstance.updateCoupon(i, selectedItem, 1, discountUpdate, validityUpdate, '',{from: web3.eth.accounts[0], gas: 200000});
    }).then(function () {
      discountInstance.couponCount().then(function (count2) {
        discountInstance.couponCode(count2).then(function (val3) {
         // alert(val3[5]);
          $('#discountCircle').html(discountUpdate + "%");
          $('#validitySpecified').html("" + validityUpdate + "");
          $('#hashCode').html("" + val3[5]);
          $('#qr').val("" + val3[5]);
        })
      })
    })
  },


  productDropChange: function () {

    var selectedItem = $('#productList').val();
    $('#discountCircle').html("0%");
    $('#validitySpecified').html("_");
    $('#actualPrice').html("_");
    App.contracts.Discount.deployed().then(function (instance) {
      discountInstance = instance;
      return instance.product(selectedItem);
    }).then(function (coup) {

      discountInstance.couponCount().then(function (count) {
        // alert("=>"+count);
        for (i = 0; i <= count; i++) {
          discountInstance.couponCode(i).then(function (val1) {


            discountInstance.product(selectedItem).then(function (val2) {
              // alert("=>" + val1[0] + " " + val1[1] + " " + val1[2] + " " + val1[3] + " " + val1[4]);
              $('#product_Name').html(val2[1] + "");
              if (val1[1] == selectedItem) {
                $('#discountCircle').html(val1[3] + "%");
                $('#validitySpecified').html("" + val1[4]);
              }
              $('#actualPrice').html("" + val2[2]);
            //  $('#discountCircle').html(val1[3] + "%");
              $('#discountUpdate').val("");
              $('#validityUpdate').val("");
              $('#QRCode').html("");
              $('#hashCode').html("");
            })

          });
        }

      }).catch(function (err) {
        console.error(err);
      });
    })
  },

  addPrd: function () {

    prdName = $('#prdName').val();
    prdPrice = $('#prdPrice').val();
    App.contracts.Discount.deployed().then(function (instance) {
      discountInstance = instance;
      return instance.productCount();
    }).then(function (prd) {
      a = parseInt(prd);
      a = a + 1;
     // alert(a + "" + prdName + "" + prdPrice);
      li = li = "<tr><td style='padding-left:10px;font-size: 10px;width:60%'>" + prdName + "</td><td style='width: 100px;padding-left:10px;'>" + prdPrice + "</td></tr>";;
      $('#listPrd').html($('#listPrd').html() + li);
      return discountInstance.addProduct(a, prdName, prdPrice);
    })
  },

  voucher: function () {
    valQR = $('#listScan li:first-child').html();
    App.contracts.Discount.deployed().then(function (instance) {
      discountInstance = instance;
      return discountInstance.couponCount();
    }).then(function (coupCount) {

      //alert(coupCount);
      for (i = 0; i <= coupCount; i++) {
        discountInstance.couponCode(i).then(function (searchCoupon) {

          if (searchCoupon[5] == valQR) {
           // alert("valid");
            $('#coupon').show();
            discountInstance.product(searchCoupon[1]).then(function (coup) {

              //alert(coup[1]);


              //alert("=>" + coup[1] + " " + searchCoupon[3] + " " + searchCoupon[4]);
              $('#product_Name1').html(coup[1] + "");
              $('#discountCircle1').html("" + searchCoupon[3] + "%");
              $('#validitySpecified1').html("" + searchCoupon[4]);
              x=searchCoupon[4];
              $('#actualPrice1').html("" + coup[2]);
              r=coup[2];
              s=r*searchCoupon[3];
              s=s/100;
              r=r-s;
              $('#discPr').html("Discount Price :"+r);

              date1=new Date(searchCoupon[4]);
              date2 = new Date();
              if(date1<date2)
              {
              $('#discPr').html("<span style='color:red;'>Experied</span>");
              }
              $('#discountUpdate1').val("");
              $('#validityUpdate1').val("");

            })

          }

        })
      }
    })
  },
  fun3: function () {

  }
};

$(function () {
  $(window).load(function () {
    App.init();
  });
});
