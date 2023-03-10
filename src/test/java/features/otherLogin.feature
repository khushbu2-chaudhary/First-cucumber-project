@OtherFeature @Regression
Feature: Other Techfios billing login page functionality validation
Background:
Given User is on the techfios login page



@OtherScinerio1
Scenario Outline: Other Scinerio - User should be able to login with valid credential

When User enters username as "<username>"
When User enters password as "<password>"
When User clicks on sign in button
Then User should land on dashboard page
Examples:
|username|password|
|demo@techfios.com|abc123|
|demo@techfios.com|abc124|
|demo2@techfios.com|abc124|
|   |    |

#@OtherScinerio2 @Smoke
#Scenario: Other Scinerio - User should be able to login with valid credential

#When User enters username as "demo@techfios.com"
#When User enters password as "abc124"
#When User clicks on sign in button
#Then User should land on dashboard page

#@OtherScinerio3
#Scenario: Other Scinerio - User should be able to login with valid credential

#When User enters username as "demo2@techfios.com"
#When User enters password as "abc124"
#When User clicks on sign in button
#Then User should land on dashboard page

#@OtherScinerio4
#Scenario: Other Scinerio - User should be able to login with valid credential

#When User enters username as ""
#When User enters password as ""
#When User clicks on sign in button
#Then User should land on dashboard page


