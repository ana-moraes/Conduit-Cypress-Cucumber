import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Applications from "../../support/applications";
const applications = new Applications();
export default class BaseSteps {}

Given(/^I access the application$/, () => {
  cy.visit("");
});

Given(/^I am logged in with valid credentials$/, () => {
  applications.signInPage.fillOutSignInForm("valid");
  applications.signInPage.clickSignInButton();
  applications.homePage.isUserLogged();
});

When(/^I access my profile$/, () => {
  applications.homePage.accessUserProfile();
});
