import BasePage from "./basePage";

const homePageLinks = {
  clickSignIn: () => {
    cy.get('a[href="/login"]').click();
  },
  clickSignUp: () => {
    cy.get('a[href="/register"]').click();
  },
};

const selectors = {
  userProfile: 'img[class="user-pic"]',
  navBarTopRight: 'ul[class="nav navbar-nav pull-xs-right"] li',
};

class HomePage extends BasePage {
  accessMenuOption(option) {
    if (option == "Sign in") {
      homePageLinks.clickSignIn();
      this.validateUrlPath("/login");
    }
    if (option == "Sign up") {
      homePageLinks.clickSignUp();
      this.validateUrlPath("/register");
    }
  }

  isUserLogged() {
    cy.get(selectors.userProfile).should("exist").should("be.visible");
  }

  clickMenuByText(text) {
    this.accessMenuByText(selectors.navBarTopRight, text);
  }

  accessUserProfile() {
    cy.get(selectors.userProfile).click();
  }
}

export default HomePage;
