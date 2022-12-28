///<reference types ="cypress"/>

describe('KCMS', () => {

    it("check login functionality", () => {
        cy.visit("http://kcms.cylsys.com/");
        cy.get('input[id=UserID]').type('3710');
        cy.get('input[id="Password"]').type('12345');
        cy.get('input[type="submit"]').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get(':nth-child(1) > .nav-link').click()
        cy.get('.btn').click()
        cy.get('.form-row > :nth-child(1)').type('1011')
        cy.get(':nth-child(2) > .form-control').type('UTI Money Market Fund')
        cy.get(':nth-child(3) > .form-control').select('Debt').should('have.value', 'number:2')
    })
})

//-------------------------------------------------------------//

describe('verify the uplode file', () => {

    let File = 'AUM_04-12-2022.xlsx'
    let File_1 = 'AUM_04-12-2022.xlsx'
    let File_2 = 'AUM_04-12-2022.xlsx'

    it('Single file uplode', () => {
        cy.visit("http://kcms.cylsys.com/");
        cy.get('input[id=UserID]').type('3710');
        cy.get('input[id="Password"]').type('12345');
        cy.get('input[type="submit"]').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false
        })
        cy.get(':nth-child(4) > #navbarDropdownMenuLink').click()
        cy.get('[href="/AUM_Upload"]').click()
        cy.get('#xlFile').attachFile(File)
        cy.get('.btn').click()
    })

    cy.get(':nth-child(4) > #navbarDropdownMenuLink').click()
    cy.get('[href="/Retention_Upload"]').click()
    cy.get('#xlFile').attachFile(File_1)
    cy.get('.btn').click()

    cy.get(':nth-child(4) > #navbarDropdownMenuLink').click()
    cy.get('[href="/SetOffUpload"]').click()
    cy.get('#xlFile').attachFile(File_2)
    cy.get('.btn').click()
})


//---------------------------------------------------------------------//

describe('KCMS', () => {
    it('Verfiy Employee Master mudule', function () {
        cy.visit("http://kcms.cylsys.com/Employee");
        cy.get('input[id=UserID]').type('3710');
        cy.get('input[id="Password"]').type('12345');

        cy.get('input[type="submit"]').click()
        // input[type=submit]

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false
        })
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('.mb-4 > .btn').click()
        cy.get(':nth-child(1) > :nth-child(1) > .form-control').select('Sunil Patil').should('have.value', 'number:33')
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').select('Equity').should('have.value', 'number:1')
        cy.get('.select2-selection__rendered').type('UTI - Mastershare Unit Scheme')
        cy.get(':nth-child(2) > :nth-child(2) > .form-control').type(10)
        cy.get(':nth-child(2) > :nth-child(3) > .form-control').select('Single Role')
        cy.get('.form-check-input').click()
        cy.get('.btn').click()
        cy.url().should('eq', 'http://kcms.cylsys.com/EmpSchmMapping/Item/0')
    })
})

//--------------------------------------------------------------//

describe('Verify the iframe', () => {
    Cypress.on('uncaught:exception', function (err, runnable) {
        return false
    })
    it('Iframe into Ifame ', () => {
        cy.visit('https://demo.automationtesting.in/Frames.html')
        cy.get(':nth-child(2) > .analystic').click()
        cy.get('#Multiple iframe').then(function ($frame) {
            let body = $frame.contents().find('body')
            cy.wrap(body).as('frameBody')
            cy.get('@frameBody').find('.iframe-container iframe').then(function ($secIframe) {
                let secBody = $secIframe.contents().find('body')
                cy.wrap(secBody).as('secframeBody')
                cy.get('@secframeBody').find('.container .row input').type('Iframe code is working', { force: true })
            })
        })
    })
})

//------------------------------------------------------------------------------//

describe('verify functionality of tms using cypress', function () {

    it('check login functionality', function () {
        cy.visit('http://tms.cylsys.com/')
        cy.get('input[name="UserName"]').type('2941')
        cy.get('.btn').click()
        cy.get('.toggle-sidebar-btn > .fa').click()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('[href="/Employee/NewTourRequest/0?statuskey=0"]').click()
        cy.get('#touritinerary').select('Domestic Tour', { force: true }).should('have.value', '4')
        // cy.get('.touritinerary').select('Domestic Tour').click({force:true});
    })
})

//------------------------------------------------------------------------------//

describe('verify functionality of tms using cypress',()=> {
    it.only('check login functionality', ()=> {
        cy.visit('http://tms.cylsys.com/')
        cy.get('input[name="UserName"]').type('2941')
        cy.get('.btn').click()

        cy.get('.toggle-sidebar-btn > .fa').click()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('[href="/Employee/NewTourRequest/0?statuskey=0"]').click()
        cy.get('#touritinerary').select('Domestic Tour', { force: true }).should('have.value', '4')
        // cy.get('.touritinerary').select('Domestic Tour').click({force:true});
        cy.get('#tourtype').select('Seminar', { force: true }).should('have.value', '11')
        // cy.get(':nth-child(1) > :nth-child(3) > label').click()
        cy.get(':nth-child(1) > :nth-child(3) > label').click({ force: true });
        cy.get('#empplacev').type('bhopal', { force: true });
        // cy.get(':nth-child(1) > :nth-child(4) > label').click()
        cy.get(':nth-child(1) > :nth-child(4) > label').click({ force: true });
        cy.get('#emppurposev').type('visit', { force: true });
        cy.get(':nth-child(1) > :nth-child(5) > label').click({ force: true });
        cy.get('#startDate').type('2022-05-12 12:30', { force: true });
        cy.get(':nth-child(6) > label').click({ force: true });
        cy.get('#problemreturndate').type('2022-05-20', { force: true });
        cy.get(':nth-child(7) > label').click({ force: true });
        cy.get('#leaveduringtour').select('Yes', { force: true }).should('have.value', "1")
        cy.get(':nth-child(8) > label').click({ force: true });
        cy.get('#justificationadvance').select('Forget to submit Tour approval', { force: true }).should('have.value', "23")
        cy.get(':nth-child(9) > label').click({ force: true });
        cy.get('#travelmodeEntitlement').select('Yes', { force: true }).should('have.value', "1")
        cy.get(':nth-child(10) > label').click({ force: true });
        cy.get('#frequentflyer').select('1', { force: true }).should('have.value', "1")
        cy.get(':nth-child(11) > label').click({ force: true });
        cy.get('#advamount').type('3000', { force: true });
        cy.get('#my_date').type('25-03-2023')
        cy.get('#ticketbookedbyJd').select('Travel Desk').should('have.value', "17")
        cy.get('#travelmode').select('Bus')
        cy.get('tfoot > :nth-child(2) > :nth-child(3)').click()
        cy.get('#journeryclass').select('Other').should('have.value', "118")
        cy.get('tfoot > :nth-child(2) > :nth-child(5)').click()
        cy.get('#empcityfrom').type('mumbai')
        cy.get('tfoot > :nth-child(2) > :nth-child(6)').click()
        cy.get('#empcityto').type('Dehli')
        cy.get('tfoot > :nth-child(2) > :nth-child(7)').click()
        //cy.get('#apptimerangefrom').select()
        //cy.get('#apptimerangeto').click()
        cy.get('tfoot > :nth-child(2) > :nth-child(9)').click()
        cy.get('#addbtn').click()
    })
})

//-----------------------------------------------------------------------------//
