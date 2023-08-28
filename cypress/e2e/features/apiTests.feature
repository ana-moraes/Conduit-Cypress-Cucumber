Feature: API Tests

  @api @E2E @smoke_back
  Scenario Outline: Sign in
    Given I log in with a user with <typeOfUser> credentials
    Then the API should return with a "<statusCode>" status code
    Examples:
      | typeOfUser | statusCode |
      | valid      | 200        |
      | invalid    | 403        |

  Scenario Outline: Manage article

    Given I log in with a user with <typeOfUser> credentials
    When I create the article
    Then I validate the article is created
    Then I delete the article

    Examples:
      | typeOfUser |
      | valid      |