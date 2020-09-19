# webdriverjssampleprj

Selenium WebDriverJS-Mocha-Chai Automation 
 
1.Install node from below link. It will install node and npm(package manager for node js.)

	https://nodejs.org/en/
	Once node installed check node and npm installed properly by running node -v and npm -v in command prompt

2.Install Atom(https://atom.io/)or Visual Code(https://code.visualstudio.com/) as IDE

3.Create the project by using “node init”

4.After creating install selenium webdriverjs

	Ex: npm install -g selenium-webdriver@3.0.0 (To install selenium with version)
	https://seleniumhq.github.io/selenium/docs/api/javascript/

5.Install chrome driver (npm install -g chromedriver)

6.App to automate - https://library-app.firebaseapp.com/libraries

7.Chrome driver path need to be set to run test. - https://simpleprogrammer.com/selenium-with-node-js/

	*Set chromedriver in path variable in windows OS
	*Download the latest version of ChromeDriver from here ChromeDriver
	*Extract the zip and place the contents somewhere you know where it is for example "C:\Users\UserName\AppData\ChromeDriver"
	*Go to your Control Panel -> System -> Edit the System Variables. Click on the "environment variables" button.
	*In the system variables box there will be a variable named "Path" select it and click edit. 
	*Copy and paste the path to the containing.  		
	*directory of the chromedriver.exe you downloaded onto the end of the variable value and end it with a semi-colon.
	*Click ok and again to close environment variables and again to close system properties.
	*Close and reopen your terminal window.
 
8.Install mocha - npm install -g mocha
	Run to test using mocha :-  mocha test
	
9.Install mochawsome to get report. After installing able to integrate with code and without cording by command line.
  	Resource : https://adamgruber.github.io/mochawesome/

  	Install mochawesome : npm install --save-dev mochawesome
  	Run command line to open report after test : mocha test --reporter mochawesome --reporter-options autoOpen=true

10.Install chai for assertion :  npm install chai --save
  	https://www.chaijs.com/guide/installation/
	
11.Install plugin for chai (chai as promised) : npm install chai-as-promised
  	https://www.chaijs.com/plugins/chai-as-promised/
  	This plugin use dto resolve returned promises and get values after resolving them.

  	Below shows how to import them to test script
  	var cha=requre('chai');
  	var chaiAsPromised=require('chai-as-promised');

12.Using Faker to generate random values. : npm install faker --save
	https://www.npmjs.com/package/Faker

13.If need to update npm packages follow below steps
	
	npm i -g 
  	npm-check-updates ncu -u 
  	npm install
  	https://www.npmjs.com/package/npm-check-updates
