Feature: Nexelem
  Scenario: Users enter Nexelem
    When User visits front page
    Then User should see the "Sales" page

  Scenario: User changes page
    When User visits front page
    And User changes page to "Production"
    Then User should see the "Production" page
