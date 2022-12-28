///<reference types ="cypress"/>

// Iframe
describe('verify the function of iframe', () => {

    it('verify the iframe with jqery', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')
         //cy.get('#mce_0').type('hii')
        cy.get('#mce_0_ifr').then((el) => {
            cy.wrap(el.contents().find('body')).as('iframebody')
            cy.get('@iframebody').should('have.attr', 'data-id')
            cy.get('@iframebody').find('p').type('hii')
        }
        )
    })

    it('verify the iframe with javascript', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').then((el) => {
            cy.wrap((el['0'].contentDocument.body)).as('iframebody')
            cy.get('@iframebody').should('have.attr', 'data-id')
            cy.get('@iframebody').find('p').type('hello')
        }
        )
    })
})

//------------------------------------------------------//

// File Upload
// Step1:Run npm install cypress-file-upload
// step2:cypress/support/commands.js --- import 'cypress-file-upload';

describe('verify the uplode file', () => {

    it.only('Single file uplode', () => {
        let Image = 'Que.jpg'
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').attachFile(Image)
        cy.get('#submit-button').click()
        cy.url().should('contain', Image)
    })

    it('Multipel file uplode', () => {
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        cy.get('#igUpload1_ibb_fp').attachFile(['Que.jpg', 'Que.jpg', 'Que.jpg'])
        cy.get('button[title="Upload"]').click()
        cy.get('span[id="igUpload1_spbtncncl_lbl"]').should('have.text', 'Done')
    })
})

