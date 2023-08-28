import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import apiRequests from "../../support/utils/apiRequests/apiRequests";
const requests = new apiRequests();

Given(/^I log in with a user with (.*) credentials$/, (typeUser) => {
  requests.loginRequest(typeUser)
});

Then(/^the API should return with a "(.*)" status code$/, (statusCode) => {
  cy.get("@loginStatus").should('eq', Number(statusCode))
})

Then (/^I create the article$/, ()=>{
  requests.createArticle()
})

Then (/^I validate the article is created$/, ()=>{
  requests.validateArticleCreation(true)
})

Then (/^I delete the article$/,()=>{
  requests.deleteArticle()
})