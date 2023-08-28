import BasePage from "./basePage";
import credentialsFixture from "../../fixtures/credentials.json";

const selectors = {
  articlesHeaders: 'a[class="preview-link"] h1',
  profileLink: 'a[href*="/profile/"]',
  profileUserNameH4: 'div[class="col-xs-12 col-md-10 offset-md-1"] h4',
};

class ProfilePage extends BasePage {
  clickArticle(text) {
    this.accessElementByText(selectors.articlesHeaders, text);
  }

  clickMyPosts() {
    this.accessElementByText(selectors.profileLink, "My Posts");
  }

  validateUsername() {
    cy.get(selectors.profileUserNameH4).invoke('text').then(profileName => {
        expect(profileName.trim()).to.contain(credentialsFixture.new_username);
    });
}
}

export default ProfilePage;
