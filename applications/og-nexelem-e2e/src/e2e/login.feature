Feature: Login

  Scenario: Login with valid credentials
    Given I am on the login page
    When I login with username lemma-admin and password lemma
    Then I should be logged in
