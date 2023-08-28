class BasePage {
  validateUrlPath(text) {
    cy.url().should("include", text);
  }

  accessElementByText(element, text) {
    cy.get(element).contains(text).should("be.visible").click();
  }
}
export default BasePage;
