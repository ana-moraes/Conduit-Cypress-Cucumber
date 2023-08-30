import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Applications from "../../support/applications";
const applications = new Applications();

When(/^I click to create a New Article$/, () => {
  applications.homePage.clickMenuByText("New Article");
});

When(/^I fill in all the fields$/, () => {
  applications.articlePage.fillOutNewArticleForm();
});

When(/^I publish the article$/, () => {
  applications.articlePage.clickPublishButton();
});

Then(/^the article should be successfully created$/, () => {
  applications.articlePage.validateCreatedArticle();
});

When(/^I select a published article$/, () => {
  applications.profilePage.clickArticle();
});

When(/^I delete the selected article$/, () => {
  applications.articlePage.clickDeleteArticle();
});

Then(/^the article should be successfully deleted$/, () => {
  applications.homePage.isHomeArticlesLoaded();
  applications.homePage.accessUserProfile();
  applications.profilePage.clickMyPosts();
  applications.articlePage.validateDeletedArticle();
});
