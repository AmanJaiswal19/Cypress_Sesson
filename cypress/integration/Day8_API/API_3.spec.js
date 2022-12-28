/// <reference types="cypress" />

describe('verify the  get  post and update comment', function () {

    it('verify the get comment  UI', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')

        // Get Comment ======> XHR ======> response ====> object ====> Html element
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain', 'laudantium')
    })

    it('verift the funtionality for POST comment', () => {

        cy.intercept({
            method: 'POST',
            url: 'https://jsonplaceholder.cypress.io/comments'
        }).as('postComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains(/^Post Comment$/).click()
        cy.wait('@postComment').then(function (res) {
            console.log(res)
            expect(res.response.statusCode).to.eq(201)
            cy.get('.network-post-comment').should('be.visible').and('have.text', 'POST successful!')
        })
    })
})