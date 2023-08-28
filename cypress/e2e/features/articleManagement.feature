Feature: Manage articles

  Background: User should be logged in
    Given I access the application
    And I click on the "Sign in" link
    And I am logged in with valid credentials

  @article @E2E
  Scenario: Publish an article
    When I click on the "New Article" button
    And I fill in all the fields
    And I click on the "Publish Article" button
    Then the article should be successfully created

  @article @E2E
  Scenario: Delete an article
    When I access my profile
    And I select my published article <title>
    And I click on the "Delete Article" button
    Then the article should be successfully deleted

    Examples:
      | title       |
      | New article |