import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Applications from "../../support/applications";
const applications = new Applications();
export default class AutenticationManagement {}

When(/^I click on the "Sign up" link$/, () => {
  applications.homePage.accessMenuOption("Sign up");
});

When(/^I fill in all the required fields$/, () => {
  applications.signUpPage.fillOutSignUpForm();
});

When(/^I click on the "Sign in" link$/, () => {
  applications.homePage.accessMenuOption("Sign in");
});

When(/^I fill in with valid credentials$/, () => {
  applications.signInPage.fillOutSignInForm("valid");
});

When(/^I fill in with invalid credentials$/, () => {
  applications.signInPage.fillOutSignInForm("invalid");
});

When(/^I click on the "Sign in" button$/, () => {
  applications.signInPage.clickSignInButton();
});

Then(/^the login should be successful$/, () => {
  applications.homePage.isUserLogged();
});

Then(/^the login should be unsuccessful$/, () => {
  applications.signInPage.isErrorMessagesVisible();
});
