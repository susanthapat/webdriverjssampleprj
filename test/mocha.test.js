var {describe,it,after,before} = require('selenium-webdriver/testing');
var Page=require('../lib/pages/home_page');
var page;

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
page.requestBtn();
});


it('Typing valid email enables request button.',function(){
page.requestBtn();
});

it('Clicking request invitation triggers a confirmation alerts.',function(){
page.alertSuccess();
});

});
