@regression
Feature: Hotel test feature

Background:
Given I open the default browser
@regression-4
Scenario: Verify that the user can sign in to their account

When I go to the top right corner and click on sign- in and account dropdown
And I click on the sign in link
When I enter  username text fields on home screen 
And I enter "automation" password text fields on home screen 
And I click on the sign in button
#Then I verify i am directed to a page that says Welcome John



























