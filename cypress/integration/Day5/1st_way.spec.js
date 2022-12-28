///<reference types="cypress"/>

describe('verify the contactUs form using object', function () {

    let obj = {
        firstName: "Santosh",
        lastName: "Dwell",
        email: "sd12@gmail.com",
        message: "Hi Good Morning"
    }

    it('verify the contact_us form using retrive obj', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(obj.firstName)
        cy.get('input[name="last_name"]').type(obj.lastName)
        cy.get('input[name="email"]').type(obj.email)
        cy.get('textarea[name="message"]').type(obj.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")
    })
})