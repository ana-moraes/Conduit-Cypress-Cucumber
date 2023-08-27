import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I access the application lalala", () => {
  cy.visit("https://angular.realworld.io/");
});
