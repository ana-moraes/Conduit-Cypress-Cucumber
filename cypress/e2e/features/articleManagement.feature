Feature: Manage articles

  Background: User should be logged in
    Given I access the application
    And I click on the "Sign in" link
    And I am logged in with valid credentials

  @article @E2E
  Scenario: Publish an article
    When I click to create a New Article
    And I fill in all the fields
    And I publish the article
    Then the article should be successfully created

  @article @E2E
  Scenario: Delete an article
    When I access my profile
    And I select a published article
    And I delete the selected article
    Then the article should be successfully deleted
