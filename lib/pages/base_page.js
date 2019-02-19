var webdriver = require('selenium-webdriver'),
By=webdriver.By,
until=webdriver.until;


var Page=function(){

this.driver=new webdriver.Builder().forBrowser('chrome').build();
 var driver=this.driver;

this.visit=function(theUrl){
  return driver.get(theUrl);
}

this.quit=function(){
  return driver.quit();
}

this.findbyCss=function(el){
  driver.wait(until.elementLocated(By.css(el)),30000);
  return driver.findElement(By.css(el));
}

this.findbyXpath=function(el){
  driver.wait(until.elementLocated(By.xpath(el)),30000);
  return driver.findElement(By.xpath(el));
}

this.findAllbyCss=function(el){
  driver.wait(until.elementLocated(By.css(el)),30000);
  return driver.findElements(By.css(el));
}

this.findAllbyXpath=function(el){
  driver.wait(until.elementLocated(By.xpath(el)),30000);
  return driver.findElements(By.xpath(el));
}

this.write=function(el,txt){
  return this.findbyCss(el).sendKeys(txt);
}

}
module.exports=Page;
