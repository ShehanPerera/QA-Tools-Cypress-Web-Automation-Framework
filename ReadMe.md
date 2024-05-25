# QA-Tools-Cypress-Web-Automation-Framework


This is Cypress and JavaScript based automation framework to test few test cases on 'https://www.saucedemo.com/' webpage.

## Pre requisites
1. node : v16.15.0
2. npm : 8.5.5
3. Cypress : 12.8.1
4. Internet connection

## Test cases
* Login page
1. Verify invalid inputs for username and password : This is to verify messages when empty username and password given.
2. Verify invalid user login : This is to verify behavior when invalid username given.
3. Verify standard user login : This is to verify success standard user login flow.
* Inventory page
1. Verify Details on Inventory page : This is to verify initial details , items on Inventory page.
2. Verify Add/Remove to cart : This is to verify behavior of adding and removing item
3. Verify Cart item count function : This is to verify count on cart when adding and removing item.

## How Run Test

1. In QA-Tools-Cypress-Web-Automation-Framework folder run below command to run all test cases

```
npx cypress run --spec "cypress/e2e/*.cy.js"
```
2. Run page related test cases
* To run Login page test cases : ``` npx cypress run --spec "cypress/e2e/LoginPageTest.cy.js"```
* To run In page test cases : ```npx cypress run --spec "cypress/e2e/InventoryPageTest.cy.js"```

2. Open below file on browser to check html reports.

``` cypress/reports/html/index.html```

## Configurations

1. To data driven test used fixtures LoginPageFields.json.
2. Use cypress.config.js to store important reusing variables such as base url ,common usernames in env.