$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechfiosBankAndCashNewAccount.feature");
formatter.feature({
  "line": 2,
  "name": "TechFios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TechfiosBankAndCashNewAccountfeature"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should be able to login with valid credentials and open a new Account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    },
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on TechFios Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User Clicks on singin",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Clicks on bankCash",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on NewAccount",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters accountTitle as \"\u003caccountTile\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters description as \"\u003cdescription\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters initialBalance as \"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters accountNumber as \"\u003caccountNumber\u003e\" in account page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\" in account page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters phone as \"\u003cPhone\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in account page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks on SubmitButton",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "interBankingURL"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Savings",
        "My Account savings",
        "700000",
        "534242",
        "Selvi",
        "6345535331",
        "https://www.chase.com/"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2882508600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials and open a new Account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TechfiosBankAndCashNewAccountfeature"
    },
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on TechFios Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User Clicks on singin",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Clicks on bankCash",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on NewAccount",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters accountTitle as \"\u003caccountTile\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters description as \"My Account savings\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters initialBalance as \"700000\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters accountNumber as \"534242\" in account page",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters contactPerson as \"Selvi\" in account page",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters phone as \"6345535331\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in account page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks on SubmitButton",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitionHW.user_is_on_TechFios_Login_Page()"
});
formatter.result({
  "duration": 608682600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinitionHW.user_enters_username_as(String)"
});
formatter.result({
  "duration": 2216040200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinitionHW.user_enters_password_as(String)"
});
formatter.result({
  "duration": 2140721000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionHW.user_Clicks_on_singin()"
});
formatter.result({
  "duration": 3001924000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionHW.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 10553100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionHW.user_Clicks_on_bankCash()"
});
formatter.result({
  "duration": 3058483200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionHW.user_clicks_on_NewAccount()"
});
formatter.result({
  "duration": 3409302600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003caccountTile\u003e",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinitionHW.user_enters_accountTitle_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3135447100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account savings",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinitionHW.user_enters_description_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3114690500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "700000",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinitionHW.user_enters_initialBalance_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3102042400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "534242",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinitionHW.user_enters_accountNumber_as_in_account_page(String)"
});
formatter.result({
  "duration": 3101269800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selvi",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinitionHW.user_enters_contactPerson_as_in_account_page(String)"
});
formatter.result({
  "duration": 3087201900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6345535331",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinitionHW.user_enters_phone_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3127848900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cinternetBankingURL\u003e",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinitionHW.user_enters_in_account_page(String)"
});
formatter.result({
  "duration": 3113883200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionHW.user_clicks_on_SubmitButton()"
});
formatter.result({
  "duration": 3560146500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionHW.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 3059727200,
  "status": "passed"
});
formatter.after({
  "duration": 786006300,
  "status": "passed"
});
});