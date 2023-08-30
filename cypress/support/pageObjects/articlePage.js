import BasePage from "./basePage";
import articleFixture from "../../fixtures/article.json";
import Utils from "../utils/utils";
const utils = new Utils();
import ProfilePage from "./profilePage";
const profilePage = new ProfilePage();

const selectors = {
  articleFormTitle: 'input[formcontrolname="title"]',
  articleFormDescription: 'input[formcontrolname="description"]',
  articleFormBody: 'textarea[formcontrolname="body"]',
  articleFormTags: 'input[placeholder="Enter tags"]',
  publishArticleButton: 'button[class="btn btn-lg pull-xs-right btn-primary"]',
  deleteArticleButton:
    'div[class="article-actions"] button[class="btn btn-sm btn-outline-danger"]',
  articlePageTitleH1: 'div[class="article-page"] h1',
  errorMessages: 'ul[class="error-messages"] li',
};

const timestamp = utils.generateTimestamp();
const articleTitle = articleFixture.title + " " + timestamp;
const urlArticleTitle = articleTitle.replace(/\s+/g, "-");
let getArticleText = "";
class ArticlePage extends BasePage {
  fillOutNewArticleForm() {
    cy.get(selectors.articleFormTitle).type(articleTitle);
    cy.get(selectors.articleFormDescription).type(articleFixture.description);
    cy.get(selectors.articleFormBody).type(articleFixture.articleBody);
    cy.get(selectors.articleFormTags).type(articleFixture.tags);
  }

  clickPublishButton() {
    cy.get(selectors.publishArticleButton).click();
    cy.intercept(
      "POST",
      "https://api.realworld.io/api/articles/",
      (request) => {
        request.continue((response) => {
          expect(response.statusCode).to.be.eq(201);
          expect(response.body).to.have.property("article");
          expect(response.body.article).to.not.be.empty;
        });
      }
    );
  }

  clickDeleteArticle() {
    cy.get(selectors.articlePageTitleH1).then(($text) => {
      getArticleText = $text.text();
    });
    cy.get(selectors.deleteArticleButton).click();
    cy.intercept(
      "DELETE",
      "https://api.realworld.io/api/articles/*",
      (request) => {
        request.continue((response) => {
          expect(response.statusCode).to.be.eq(204);
        });
      }
    );
  }

  validateCreatedArticle() {
    cy.get(selectors.errorMessages).should("not.exist");
    cy.get(selectors.articlePageTitleH1).should("have.text", articleTitle);
    this.validateUrlPath(urlArticleTitle);
  }

  validateDeletedArticle() {
    profilePage.isArticleDeleted(getArticleText);
  }
}

export default ArticlePage;
