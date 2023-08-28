import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Applications from "../../support/applications";
const applications = new Applications();
export default class ArticleManagement {}

When(/^I click on the "New Article" button$/, () => {
  applications.homePage.clickMenuByText("New Article");
});

When(/^I fill in all the fields$/, () => {
  applications.articlePage.fillOutNewArticleForm();
});

When(/^I click on the "Publish Article" button$/, () => {
  applications.articlePage.clickPublishButton();
});

Then(/^the article should be successfully created$/, () => {
  applications.articlePage.validateCreatedArticle();
});

When(/^I select my published article (.*)$/, (title) => {
  applications.profilePage.clickArticle(title);
});

When(/^I click on the "Delete Article" button$/, () => {
  applications.articlePage.deleteArticle();
});

Then(/^the article should be successfully deleted$/, () => {
  applications.homePage.isHomeArticlesLoaded();
  applications.homePage.accessUserProfile();
  applications.profilePage.clickMyPosts();
  applications.articlePage.validateDeletedArticle();
});
