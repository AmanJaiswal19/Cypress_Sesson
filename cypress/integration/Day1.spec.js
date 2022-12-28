// css --- selector

// <h1 class = "one" id="two" name ="nm">Heading<h1>

// tagName 
// cy.get('h1')

// class 
// cy.get('.one')

// id    
// cy.get('#two')

// common formula 
// h1[name = "nm"]

// text 
// cy.contains('Heading')


///<reference types ="Cypress"/>

describe('Functionality of Aapplication', () => {

    it('login with valid credentials', () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('a[id = "contact-us"]').invoke('removeAttr', 'target').click();
        cy.get('input[name="first_name"]').type('Aman')
        cy.get('input[name="last_name"]').type('Jaiswal')
        cy.get('input[name="email"]').type('amanjaiswal591@gmail.com')
        cy.get('textarea[name="message"]').type("Hi Good Morning")
        cy.get('input[type="submit"]').click()
        cy.get('div[id="contact_reply"]>h1').should('have.text', 'Thank You for your Message!')
    })

    it('login with invalid credentials', () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('a[id = "contact-us"]').invoke('removeAttr', 'target').click();
        cy.get('input[name="first_name"]').type('Aman')
        cy.get('input[name="last_name"]').type('Jaiswal')
        cy.get('input[name="email"]').type('amanjaiswalgmail.com')
        cy.get('textarea[name="message"]').type("Hi Good Morning")
        cy.get('input[type="submit"]').click()
        cy.get('body').should('contain', 'Error')
    })
    
    // Multipal Checkbox
    it('Test all the checkbox are checked using each', () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('a[id = "dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        cy.get('input[type="checkbox"]').each((el, index) => {
            cy.wrap(el).check()
        })
    })

    // single checkbox
    it('Test the single checkbox', () => {
        cy.visit('http://webdriveruniversity.com/');
        cy.get('a[id="dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        cy.get('input[value="option-1"]').check()
        cy.get('input[value="option-3"]').uncheck()
        cy.get('input[value="option-3"]').should('not.be.checked');
    })
    
    // Redio Button
    it('Test the Redio Button is checked', () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('a[id = "dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        cy.get('input[value="green"]').check()
        cy.get('input[value="green"]').should('be.checked')
        cy.get('input[value="blue"]').check().should('be.checked')
        cy.get('input[value="green"]').should('not.be.checked')
    })
})