const Marketplace = artifacts.require("Marketplace");
require('chai')
    .use(require('chai-as-promised'))
    .should()


contract('Marketplace', ([deployer, seller, buyer])=> {
    let marketplace
    before(async() => {
        marketplace = await Marketplace.deployed()
    })

    describe('deployment', async() => {
        it('deploys successfull', async() => {
            const address = await marketplace.address
            assert.notEqual(address,0x0)
            assert.notEqual(address,'')
            assert.notEqual(address,null)
            assert.notEqual(address,undefined)
        })

        it("has a name", async() => {
            const name = await marketplace.name()
            assert.equal(name,"Vyshak Puthusseri")
        })
    })

    describe('products', async() => {
        let result, productCount
        before(async() => {
            result = await marketplace.createProduct("iphone",web3.utils.toWei('1', 'Ether'), { from: seller})
            productCount = await marketplace.productCount()
        })
    
        it("Creates products", async() => {
            
            assert.equal(productCount,1)
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(),productCount.toNumber(), 'id is correct')
            assert.equal(event.name,'iphone', 'name is correct')
            assert.equal(event.price,'1000000000000000000', 'price is correct')
            assert.equal(event.owner, seller, 'owner is correct')
            assert.equal(event.purchased,false,'purchased is correct')
       
            //Failure : product require name, false if it has name
            await await marketplace.createProduct("",web3.utils.toWei('1', 'Ether'), { from: seller}).should.be.rejected;
            //Failure : reequier price
            await await marketplace.createProduct("iphone",0, { from: seller}).should.be.rejected;
        })
        it("list products", async() => {
            const products = await marketplace.products(productCount)
            assert.equal(products.id.toNumber(),productCount.toNumber(), 'id is correct')
            assert.equal(products.name,'iphone', 'name is correct')
            assert.equal(products.price,'1000000000000000000', 'price is correct')
            assert.equal(products.owner, seller, 'owner is correct')
            assert.equal(products.purchased,false,'purchased is correct')
       
        
        })

        it("sell products", async() => {

            //Store the seller balance at first
            let oldSellerBalance
            oldSellerBalance = await web3.eth.getBalance(seller)
            oldSellerBalance = new web3.utils.BN(oldSellerBalance)

            //success buyyer makes the purchase
            result = await marketplace.purchaseProduct(productCount, {from: buyer, value: web3.utils.toWei('1', 'Ether')})
          
            //check the logs
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(),productCount.toNumber(), 'id is correct')
            assert.equal(event.name,'iphone', 'name is correct')
            assert.equal(event.price,'1000000000000000000', 'price is correct')
            assert.equal(event.owner, buyer, 'owner is correct')
            assert.equal(event.purchased,true,'purchased is correct')
       
            //check if seller receves the correct amount
            //After the transaction
            let newSellerBalance
            newSellerBalance = await web3.eth.getBalance(seller)
            newSellerBalance = new web3.utils.BN(newSellerBalance)

            let price
            price = web3.utils.toWei('1', 'Ether')
            price = new web3.utils.BN(price)
            console.log(oldSellerBalance,newSellerBalance,price)
            
            const expectedBalance = oldSellerBalance.add(price)
            assert.equal(newSellerBalance.toString(),expectedBalance.toString())
        
            //Failures : Tries to buy a product that doesnot exists
            await marketplace.purchaseProduct(99, {from: buyer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected; 
          
        })




    })












})