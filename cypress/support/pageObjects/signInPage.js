import BasePage from "./basePage";
import credentialsFixture from "../../fixtures/credentials.json";

const selectors = {
  email: 'input[formcontrolname="email"]',
  password: 'input[formcontrolname="password"]',
  signInButton: 'button[type="submit"]',
  errorMessages: 'ul[class="error-messages"]',
};

class SignInPage extends BasePage {
  fillOutSignInForm(text) {
    if (text === "valid") {
      cy.get(selectors.email).type(credentialsFixture.valid_email);
      cy.get(selectors.password).type(credentialsFixture.valid_password);
    }
    if (text === "invalid") {
      cy.get(selectors.email).type(credentialsFixture.invalid_email);
      cy.get(selectors.password).type(credentialsFixture.invalid_password);
    }
  }

  clickSignInButton() {
    cy.get(selectors.signInButton).click();
  }

  isErrorMessagesVisible() {
    cy.get(selectors.errorMessages).should("exist").should("be.visible");
  }
}

export default SignInPage;
