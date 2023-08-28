import BasePage from "./basePage";

const selectors = {
  articlesHeaders: 'a[class="preview-link"] h1',
  profileLink: 'a[href*="/profile/"]',
};

class ProfilePage extends BasePage {
  clickArticle(text) {
    this.accessElementByText(selectors.articlesHeaders, text);
  }

  clickMyPosts() {
    this.accessElementByText(selectors.profileLink, "My Posts");
  }
}

export default ProfilePage;
