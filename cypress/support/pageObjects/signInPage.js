import BasePage from "./basePage";
import credentialsFixture from "../../fixtures/credentials.json";

const selectors = {
  email: 'input[formcontrolname="email"]',
  password: 'input[formcontrolname="password"]',
  signInButton: 'button[type="submit"]',
  errorMessages: 'ul[class="error-messages"]',
};

class SignInPage extends BasePage {
  fillOutSignInForm(typeOfCredentials) {
    if (typeOfCredentials === "valid") {
      cy.get(selectors.email).type(credentialsFixture.valid_email);
      cy.get(selectors.password).type(credentialsFixture.valid_password);
    }
    if (typeOfCredentials === "invalid") {
      cy.get(selectors.email).type(credentialsFixture.invalid_email);
      cy.get(selectors.password).type(credentialsFixture.invalid_password);
    }
  }

  clickSignInButton(typeOfCredentials) {
    cy.get(selectors.signInButton).click();
    cy.intercept("POST", "https://api.realworld.io/api/users/login", (request) => {
      request.continue((response) => {
        if (typeOfCredentials === "valid") {
          expect(response.statusCode).to.be.eq(200);
          expect(response.body.user.username).to.be.eq(
            credentialsFixture.valid_username
          );
        } else if (typeOfCredentials === "invalid") {
          expect(response.statusCode).to.be.eq(403);
          expect(response.body.errors).to.not.be.empty;
        }
      });
    });
  }

  isErrorMessagesVisible() {
    cy.get(selectors.errorMessages).should("exist").should("be.visible");
  }
}

export default SignInPage;
