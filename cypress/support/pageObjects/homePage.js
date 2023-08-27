import BasePage from "./basePage";

const homePage = {
  clickSignIn: () => {
    cy.get('a[href="/login"]').click();
  },
  clickSignUp: () => {
    cy.get('a[href="/register"]').click();
  },
  profileSelector: 'a[href="/profile/jfadsdfj"]'
};

class HomePage extends BasePage{
  accessMenuOption(option) {
    if (option == 'Sign in') {
        homePage.clickSignIn()
        this.validateUrlPath('/login')
    }
    if (option == 'Sign up') {
        homePage.clickSignUp()
        this.validateUrlPath('/register')
    }
  }
  
  isUserLogged(){
    cy.get(homePage.profileSelector).should('exist').should('be.visible')
  }
}

export default HomePage