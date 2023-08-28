import HomePage from './pageObjects/homePage'
import SignUpPage from './pageObjects/signUpPage'
import SignInPage from './pageObjects/signInPage'
import ArticlePage from './pageObjects/articlePage'
import ProfilePage from './pageObjects/profilePage'

/**
 * This is the main class that encapsulates all pages related to the application, except for base pages, as they are not intended to be directly called.
 * By using this class, there's no need to import and create objects for each page individually. 
 * Instead, you can simply call the methods and properties from this Application class.
 * Any new pages added to the application should be included here, ensuring they are available for use throughout the project.
*/

class Applications {
	constructor() {
		this.homePage = new HomePage()
		this.signUpPage = new SignUpPage()
		this.signInPage = new SignInPage()
		this.articlePage = new ArticlePage()
		this.profilePage = new ProfilePage()
	}
}

export default Applications