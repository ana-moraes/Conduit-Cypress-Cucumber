class BasePage {
  validateUrlPath(text) {
    cy.url().should("include", text);
  }

  accessMenuByText(element, text) {
    cy.get(element).contains(text).should("be.visible").click();
  }

  selectMyArticleByTitle(element, text) {
    cy.get(element).contains(text).should("be.visible").click();
  }
}
export default BasePage;
