import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Applications from "../../support/applications";
const applications = new Applications();

When(/^I click on the "(.*)" link$/, (linkType) => {
  applications.homePage.accessMenuOption(linkType);
});

When(/^I fill in all the required fields$/, () => {
  applications.signUpPage.fillOutSignUpForm();
});

When(/^I fill in with (.*) credentials$/, (typeOfCredentials) => {
  applications.signInPage.fillOutSignInForm(typeOfCredentials);
});

When(/^I click on the "(.*)" button - (.*)$/, (buttonType, typeOfCredentials) => {
  switch (buttonType) {
    case "Sign in":
      applications.signInPage.clickSignInButton(typeOfCredentials);
      break;
    case "Sign up":
      applications.signUpPage.clickSignUpButton();
      break;
    default:
  }
});

Then(/^the new user should be created$/, () => {
  applications.homePage.isUserLogged();
  applications.homePage.accessUserProfile();
  applications.profilePage.validateUsername();
});

Then(/^the login should be "(.*)"$/, (result) => {
  switch (result) {
    case "successful":
      applications.homePage.isUserLogged();
      break;
    case "unsuccessful":
      applications.signInPage.isErrorMessagesVisible();
      break;
    default:
      throw new Error("Check type of credentials");
  }
});
