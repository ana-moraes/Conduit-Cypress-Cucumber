import BasePage from "./basePage";
import credentialsFixture from "../../fixtures/credentials.json";
import Utils from "../utils/utils";
const utils = new Utils();

const selectors = {
  username: 'input[formcontrolname="username"]',
  email: 'input[formcontrolname="email"]',
  password: 'input[formcontrolname="password"]',
  signUpButton: 'button[type="submit"]',
  errorMessages: 'ul[class="error-messages"] li',
};

class SignUpPage extends BasePage {
  fillOutSignUpForm() {
    const timestamp = utils.generateTimestamp();
    cy.get(selectors.username).type(
      credentialsFixture.new_username + " " + timestamp
    );
    cy.get(selectors.email).type(
      credentialsFixture.new_email + " " + timestamp
    );
    cy.get(selectors.password).type(credentialsFixture.new_password);
  }

  clickSignUpButton() {
    cy.get(selectors.signUpButton).click().wait(1000);
    cy.get(selectors.errorMessages).should("not.exist");
  }

  validateUserWasCreated() {
    const userUrl = credentialsFixture.new_username.replace(/\s+/g, "-");
    this.validateUrlPath(userUrl);
  }
}

export default SignUpPage;
