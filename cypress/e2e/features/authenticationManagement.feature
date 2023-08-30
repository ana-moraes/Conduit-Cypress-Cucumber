Feature: Manage Sign in and Sign up

  Background: Access the application
    Given I access the application

  @login @E2E
  Scenario: Sign up successfully
    When I click on the "<signType>" link
    And I fill in all the required fields
    And I click on the "<signType>" button - <typeOfCredentials>
    Then the new user should be created
    Examples:
      | signType | typeOfCredentials |
      | Sign up  | valid             |

  @login @E2E @smoke
  Scenario Outline: Sign in with different credentials
    When I click on the "<signType>" link
    And I fill in with <typeOfCredentials> credentials
    And I click on the "<signType>" button - <typeOfCredentials>
    Then the login should be "<result>"

    Examples:
      | typeOfCredentials | result       | signType |
      | valid             | successful   | Sign in  |
      | invalid           | unsuccessful | Sign in  |
