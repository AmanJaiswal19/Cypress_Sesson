///<reference types = "cypress"/>

// it is best way to write fixture using import

import Objinfo from "../../fixtures/Objinfo.json"

describe('verify the ContactUs form data using import from fixture', function () {

    it('verify the ContactUs data from fixture using import', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(Objinfo.firstName)
        cy.get('input[name="last_name"]').type(Objinfo.lastName)
        cy.get('input[name="email"]').type(Objinfo.email)
        cy.get('textarea[name="message"]').type(Objinfo.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")
    })
})