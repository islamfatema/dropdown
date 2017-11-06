$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SignInAcccount.feature");
formatter.feature({
  "line": 2,
  "name": "Hotel test feature",
  "description": "",
  "id": "hotel-test-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the default browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SharedSD.before()"
});
formatter.result({
  "duration": 10415426015,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify that the user can sign in to their account",
  "description": "",
  "id": "hotel-test-feature;verify-that-the-user-can-sign-in-to-their-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@regression-4"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I go to the top right corner and click on sign- in and account dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on the sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter  username text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter \"automation\" password text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "SignInAccountSD.iGoToTheTopRightCornerAndClickOnSignInAndAccountDropdown()"
});
formatter.result({
  "duration": 490158675,
  "status": "passed"
});
formatter.match({
  "location": "SignInAccountSD.iClickOnTheSignInLink()"
});
formatter.result({
  "duration": 410806369,
  "status": "passed"
});
formatter.match({
  "location": "SignInAccountSD.iEnterUsernameTextFieldsOnHomeScreen()"
});
formatter.result({
  "duration": 127151513,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: \nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Fatemas-MacBook-Pro.local\u0027, ip: \u00272604:2000:6a41:5800:9c8d:5fa:302d:d3e9\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.5\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003d/var/folders/m8/vxtlqvxx7qxg07yszjs9ty2r0000gn/T/rust_mozprofile.xeUZGuA4Voan, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, platform\u003dANY, specificationLevel\u003d0.0, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d54.0.1, platformVersion\u003d16.6.0, moz:processID\u003d7975.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003ddarwin}]\nSession ID: ead811df-9093-054d-925b-099853d86e5e\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\n\tat framework.BasePage.enteremail(BasePage.java:20)\n\tat framework.SignInAccount.entertext(SignInAccount.java:12)\n\tat stepDefination.SignInAccountSD.iEnterUsernameTextFieldsOnHomeScreen(SignInAccountSD.java:24)\n\tat ✽.When I enter  username text fields on home screen(SignInAcccount.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "automation",
      "offset": 9
    }
  ],
  "location": "SignInAccountSD.iEnterPasswordTextFieldsOnHomeScreen(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInAccountSD.iClickOnTheSignInButton()"
});
formatter.result({
  "status": "skipped"
});
});