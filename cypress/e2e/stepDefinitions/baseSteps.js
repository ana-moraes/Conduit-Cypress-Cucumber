import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import Applications from '../../support/applications'
const applications = new Applications()
export default class BaseSteps {}

Given('I access the application', () => {
    cy.visit('')
})