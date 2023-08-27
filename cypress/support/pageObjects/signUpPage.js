import BasePage from "./basePage";
import credentialsFixture from '../../fixtures/credentials.json'

const selectors = {
  username: 'input[formcontrolname="username"]',
  email: 'input[formcontrolname="email"]',
  password: 'input[formcontrolname="password"]',
};

class SignUpPage extends BasePage{
  fillOutSignUpForm() {
    cy.get(selectors.username).type(credentialsFixture.new_username)
    cy.get(selectors.email).type(credentialsFixture.new_email)
    cy.get(selectors.password).type(credentialsFixture.new_password)
  }
}

export default SignUpPage