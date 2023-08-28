import BasePage from "./basePage";
import articleFixture from "../../fixtures/article.json";

const selectors = {
  articleFormTitle: 'input[formcontrolname="title"]',
  articleFormDescription: 'input[formcontrolname="description"]',
  articleFormBody: 'textarea[formcontrolname="body"]',
  articleFormTags: 'input[placeholder="Enter tags"]',
  publishArticleButton: 'button[class="btn btn-lg pull-xs-right btn-primary"]',
  deleteArticleButton: 'div[class="article-actions"] button[class="btn btn-sm btn-outline-danger"]',
  articlePageTitleH1: 'div[class="article-page"] h1',
};

class ArticlePage extends BasePage {
  fillOutNewArticleForm() {
    cy.get(selectors.articleFormTitle).type(articleFixture.title);
    cy.get(selectors.articleFormDescription).type(articleFixture.description);
    cy.get(selectors.articleFormBody).type(articleFixture.articleBody);
    cy.get(selectors.articleFormTags).type(articleFixture.tags);
  }

  clickPublishButton() {
    cy.get(selectors.publishArticleButton).click();
  }

  deleteArticle() {
    cy.get(selectors.deleteArticleButton).click();
  }

  validateCreatedArticle() {
    cy.get(selectors.articlePageTitleH1).should("have.text", articleFixture.title);
    this.validateUrlPath(articleFixture.title);
  }

  validateDeletedArticle() {
    cy.get(selectors.articlePageTitleH1).should("not.have.text", articleFixture.title);
  }
}

export default ArticlePage;
