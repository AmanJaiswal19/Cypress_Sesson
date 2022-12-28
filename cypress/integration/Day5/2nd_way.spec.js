///<reference types = "cypress"/>

describe('verify the contact_us form data from Data.json file', function () {

    it('verify the contact_us data retrive from fixture file', function () {
        cy.fixture('info').then(function (data) {
            //cy.log(res)
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.message)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', "Thank You for your Message!")
        })
    })
})