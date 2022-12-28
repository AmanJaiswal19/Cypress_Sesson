///<reference types ="Cypress"/>

describe('Functionality of Aapplication', () => {
     // DropDown
    it('Test the DropDown which is select', () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('a[id = "dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click();
        cy.get('select[id="dropdowm-menu-1"]').select('Python').should('have.value', 'python')
    })

    // Dynamic DropDown
    it('Test the Dynamic DropDown', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('input[type="text"]').type('iphone13')
        cy.get('button[type="submit"]').click()
    })

    // window js alert
    it('validate the JS Window alart', () => {
        cy.on('window:alert', function (str) {
            expect(str).to.eq('I am an alert box!')
        })
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
    })

    it('validate JS window:confirm OK', () => {
        cy.on('window:confirm', function (str) {
            console.log(str)
            return true
        })
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text', "You pressed OK!")
    })

    it('validate JS window:confirm cancle', function () {
        cy.on('window:confirm', function (str) {
            return false
        })
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text', "You pressed Cancel!")
    })
})