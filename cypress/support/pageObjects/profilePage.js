import BasePage from "./basePage";
import credentialsFixture from "../../fixtures/credentials.json";

const selectors = {
  articlesHeaders: 'a[class="preview-link"] h1',
  profileLink: 'a[href*="/profile/"]',
  profileUserNameH4: 'div[class="col-xs-12 col-md-10 offset-md-1"] h4',
};

class ProfilePage extends BasePage {
  clickArticle() {
    cy.get(selectors.articlesHeaders).first().click();
  }

  clickMyPosts() {
    this.accessElementByText(selectors.profileLink, "My Posts");
  }

  validateUsername() {
    cy.get(selectors.profileUserNameH4)
      .invoke("text")
      .then((profileName) => {
        expect(profileName.trim()).to.contain(credentialsFixture.new_username);
      });
  }

  isArticleDeleted(deletedArticleTitle) {
    cy.get(selectors.articlesHeaders)
      .contains(deletedArticleTitle)
      .should("not.exist");
    cy.log("Article " + deletedArticleTitle + " not found");
  }
}

export default ProfilePage;
