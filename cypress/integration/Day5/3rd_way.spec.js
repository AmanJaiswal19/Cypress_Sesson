///<reference types = "cypress"/>

describe('verify the contactus via fixture from before', function () {

    let jay;
    before(() => {
        cy.fixture('info').then((data) => {
            jay = data
        })
    })

    it('contactus via fixture from before', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(jay.firstName)
        cy.get('input[name="last_name"]').type(jay.lastName)
        cy.get('input[name="email"]').type(jay.email)
        cy.get('textarea[name="message"]').type(jay.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")
    })
})