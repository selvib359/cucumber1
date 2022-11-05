@TechfiosBankAndCashNewAccountfeature @Regression
Feature: TechFios bank and cash New Account Functionality

@Scenario1    @smoke
Scenario Outline: User should be able to login with valid credentials and open a new Account
Given User is on TechFios Login Page
When User enters username as "<username>"
When User enters password as "<password>"
Then User Clicks on singin
Then User should land on Dashboard page
Then User Clicks on bankCash
Then User clicks on NewAccount
Then User enters accountTitle as "<accountTile>" in accounts page
Then User enters description as "<description>" in accounts page
Then User enters initialBalance as "<initialBalance>" in accounts page
Then User enters accountNumber as "<accountNumber>" in account page
Then User enters contactPerson as "<contactPerson>" in account page
Then User enters phone as "<Phone>" in accounts page
Then User enters "<internetBankingURL>" in account page
And User clicks on SubmitButton
Then User should be able to validate account created successfully
Examples:
|username|password|accountTitle|description|initialBalance|accountNumber|contactPerson|Phone|interBankingURL|
|demo@techfios.com|abc123|Savings|My Account savings|700000|534242|Selvi|6345535331|https://www.chase.com/|
