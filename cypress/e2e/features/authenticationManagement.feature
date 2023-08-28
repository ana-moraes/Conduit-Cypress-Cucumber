Feature: Manage Sign in and Sign up

  Background: Access the application
    Given I access the application

  @login @E2E
  Scenario: Sign up successfully
    When I click on the "Sign up" link
    And I fill in all the required fields
  #   And I click on the "Sign up" button
  #   Then the new user should be created

  @login @E2E @smoke
  Scenario: Sign in successfully
    When I click on the "Sign in" link
    And I fill in with valid credentials
    And I click on the "Sign in" button
    Then the login should be successful

  @login @E2E @smoke
  Scenario: Sign in failed
    When I click on the "Sign in" link
    And I fill in with invalid credentials
    And I click on the "Sign in" button
    Then the login should be unsuccessful