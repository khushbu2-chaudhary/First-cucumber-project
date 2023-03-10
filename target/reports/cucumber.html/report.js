$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/TechfiosLogin.feature");
formatter.feature({
  "name": "Techfios billing login page functionality validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Other Scinerio - User should be able to login with valid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@OtherScinerio4"
    }
  ]
});
formatter.step({
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "When "
});
formatter.step({
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "name": "User should be able to click BankandCash page",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to click NewAccount page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters AccountTitle as \"\u003cAccountTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters Description as \"\u003cDescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters InitialBalance as \"\u003cInitialBalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters AccountNumber as \"\u003cAccountNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters ContactPerson as \"\u003cContactPerson\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters Phone as \"\u003cPhone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters URL as \"\u003cURL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks SubmitButton page",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to validate account created succesfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "AccountTitle",
        "Description",
        "InitialBalance",
        "AccountNumber",
        "ContactPerson",
        "Phone",
        "URL"
      ]
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "abckhushbu124",
        "ANZ Bank123",
        "0000",
        "7658",
        "khushbu123",
        "78965",
        "abc124@gmail.com"
      ]
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "abckhushbu1234",
        "ANZ Bank1234",
        "0000",
        "7658",
        "khushbu1233",
        "78965",
        "abc1245@gmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Other Scinerio - User should be able to login with valid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@OtherScinerio4"
    }
  ]
});
formatter.step({
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_enters_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to click BankandCash page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_should_be_able_to_click_BankandCash_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to click NewAccount page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_should_be_able_to_click_NewAccount_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters AccountTitle as \"abckhushbu124\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_enters_AccountTitle_as_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Description as \"ANZ Bank123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_enters_Description_as_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters InitialBalance as \"0000\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_enters__asInitialBalance_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters AccountNumber as \"7658\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_enters__as_AccountNumber_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters ContactPerson as \"khushbu123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_enters__as_ContactPerson_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Phone as \"78965\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_enters__as_Phone_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters URL as \"abc124@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_enters__as_URL_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks SubmitButton page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_should_be_able_to_click_SubmitButton_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to validate account created succesfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_should_be_able_to_validate_account_created_succesfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Other Scinerio - User should be able to login with valid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@OtherScinerio4"
    }
  ]
});
formatter.step({
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_enters_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to click BankandCash page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_should_be_able_to_click_BankandCash_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to click NewAccount page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_should_be_able_to_click_NewAccount_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters AccountTitle as \"abckhushbu1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_enters_AccountTitle_as_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Description as \"ANZ Bank1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_enters_Description_as_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters InitialBalance as \"0000\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_enters__asInitialBalance_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters AccountNumber as \"7658\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_enters__as_AccountNumber_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters ContactPerson as \"khushbu1233\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_enters__as_ContactPerson_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Phone as \"78965\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_enters__as_Phone_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters URL as \"abc1245@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_enters__as_URL_(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks SubmitButton page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_should_be_able_to_click_SubmitButton_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to validate account created succesfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.User_should_be_able_to_validate_account_created_succesfully()"
});
formatter.result({
  "status": "passed"
});
});