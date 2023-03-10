@LoginFeature

Feature: Techfios billing login page functionality validation


@Scinerio1
Scenario: User should be able to login with valid credential
Given User is on the techfios login page
When User enters username as "demo@techfios.com"
When User enters password as "abc123"
When User clicks on sign in button
Then User should land on dashboard page
And User should be able to click BankandCash page
And User should be able to click NewAccount page
And User enters AccountTitle as "abckhushbu"
And User enters Description as "ANZ Bank"
And User enters InitialBalance as "000" 
And User enters AccountNumber as "7658"
And User enters ContactPerson as "khushbu"
And User enters Phone as "78965"
And User enters URL as "abc2@gmail.com"
And User clicks SubmitButton page


@Scinerio2 
Scenario: User should not be able to login with valid credential
Given User is on the techfios login page
When User enters username as "demo@techfios.com"
When User enters password as "abc124"
When User clicks on sign in button
Then User should land on dashboard page

@OtherScinerio4
Scenario Outline: Other Scinerio - User should be able to login with valid credential

Given User is on the techfios login page
When User enters username as "<username>"
When User enters password as "<password>"
When User clicks on sign in button
Then User should land on dashboard page
And User should be able to click BankandCash page
And User should be able to click NewAccount page
And User enters AccountTitle as "<AccountTitle>"
And User enters Description as "<Description>"
And User enters InitialBalance as "<InitialBalance>" 
And User enters AccountNumber as "<AccountNumber>"
And User enters ContactPerson as "<ContactPerson>"
And User enters Phone as "<Phone>"
And User enters URL as "<URL>"
And User clicks SubmitButton page
Then User should be able to validate account created succesfully 

Examples:
|  username | password  |AccountTitle |Description |InitialBalance |AccountNumber |ContactPerson |Phone| URL |
| demo@techfios.com | abc123 | abckhushbu124 | ANZ Bank123| 0000 | 7658 | khushbu123 | 78965 | abc124@gmail.com | 
| demo@techfios.com | abc123 | abckhushbu1234 | ANZ Bank1234| 0000 | 7658 | khushbu1233 | 78965 | abc1245@gmail.com | 






