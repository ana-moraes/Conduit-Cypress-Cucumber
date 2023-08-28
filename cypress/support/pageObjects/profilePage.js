import BasePage from "./basePage";

const selectors = {
  articlesHeaders: 'a[class="preview-link"] h1',
};

class ProfilePage extends BasePage {
  clickArticle(text) {
    this.accessMenuByText(selectors.articlesHeaders, text);
  }
}

export default ProfilePage;
