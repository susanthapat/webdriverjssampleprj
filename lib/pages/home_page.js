var Page=require('../pages/base_page');

Page.prototype.requestBtn=function(){
  this.write('input','susantha@gmail.com');
  return{
    opacity:this.findbyCss('.btn-lg').getCssValue('opacity'),
    state:this.findbyCss('.btn-lg').isEnabled()
  }
}


Page.prototype.clickSubmit=function(){
return this.findbyCss('.btn-lg').click();
}


Page.prototype.alertSuccess=function(){
  this.requestBtn();
  this.clickSubmit();
  return this.findbyCss('.alert-success').getText();
}


module.exports=Page;
