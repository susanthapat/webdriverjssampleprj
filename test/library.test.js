var {describe,it,after,before} = require('selenium-webdriver/testing');
var Page=require('../lib/pages/home_page');
var page;
var chai=require('chai');
var chaiAsPromised=require('chai-as-promised');
var should=chai.should();
chai.use(chaiAsPromised);

describe('library app test schenarioes',function(){
this.timeout(20000);

  beforeEach(function(){
     page=new Page();
    page.visit('https://library-app.firebaseapp.com/');﻿
    page.driver.manage().window().maximize();
    page.driver.manage().deleteAllCookies();
  });

  afterEach(function(){
  page.quit();
  });


it('Typing valid email changes opacity to 1.',function(){
var btn=page.requestBtn();
//eventualy says that wait for the promise to be resolved, get the value and run assertion on that value
btn.opacity.should.eventually.equal('1');
});


it('Typing valid email enables request button.',function(){
var btn=page.requestBtn();
btn.state.should.eventually.be.true
});

it('Clicking request invitation triggers a confirmation alerts.',function(){
var alert=page.alertSuccess();
alert.should.eventually.contain("Thank you!")
});

});
